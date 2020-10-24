import System.Directory
import Control.Monad (filterM)
import Data.List (intercalate)
import System.FilePath
import Control.Monad.Writer
import Data.Char (toUpper, toLower)
import qualified System.FilePath.Posix

outputFile :: FilePath
outputFile = "c:/Users/YoavH/Desktop/FlyingASpaceFish/src/assets.ts"

publicDirectory :: FilePath
publicDirectory = "c:/Users/YoavH/Desktop/FlyingASpaceFish/public"

assetsDir :: FilePath
assetsDir = "assets"

main :: IO ()
main = do
    d <- readFullDirectoryStructure publicDirectory
    let x = flattenDirectoryStructure d
    let y = intercalate "\n\n" (map stringifyExportType x)
    --let result = outputResults (analyzeDirectoreStructure d)
    --saveFile result
    -- putStrLn y
    writeFile outputFile y
    putStrLn "done"


data NameAndPath = NameAndPath 
    { nameAndPathName :: String
    , nameAndPathPath :: FilePath
    }
    deriving (Show)

-- Convert this to keep the relative path to the file including file name + suffix
-- remove suffix fromv value
data ExportType = ExportType
    { exportTypeName :: String
    , exportTypeValues :: [NameAndPath]
    }
    deriving (Show)

data AssetsCollection = AssetsCollection
    { assetsCollectionExportTypes :: [ExportType]
    }
    deriving (Show)


-- Convert this in objectAssignment add the PATH as the value of the object
stringifyExportType :: ExportType -> String
stringifyExportType export = prologue <> valuesStr <> semicolon <> objectDefintion <> objectAssignment <> objectAssignmentCloser
    where
    prologue = "export type " <> capitalize (exportTypeName export) <> " = "
    valuesStr = intercalate " |\n    " (map (\x -> "'" <> nameAndPathName x <> "'") (exportTypeValues export))
    semicolon = ";"
    objectDefintion = "\nexport type " <> capitalize (exportTypeName export) <> "Assets" <> " = { [K in " <> capitalize (exportTypeName export) <> "]: string };"
    objectAssignment = "\nexport const " <> (exportTypeName export) <> ": " <> capitalize (exportTypeName export) <> "Assets" <> " = {" <> intercalate ",\n    " (map (\x -> "'" <> nameAndPathName x <> "': '" <> nameAndPathPath x <> "'") (exportTypeValues export))
    objectAssignmentCloser = "\n}"

capitalize :: String -> String
capitalize (x:xs) = toUpper x : map toLower xs
capitalize [] = []

stringifyAssetsCollection :: AssetsCollection -> String
stringifyAssetsCollection assets =
    intercalate "\n"
        (map stringifyExportType (assetsCollectionExportTypes assets))

data DirectoryStructure = DirectoryStructure [DirectoryEntry]
    deriving (Show)

data DirectoryEntry = DirectoryEntry
    { directoryEntryName :: String
    , directoryEntryFiles :: [String]
    , directoryEntrySubDirs :: [DirectoryEntry]
    }
    deriving (Show)

readDirectoryEntry :: DirectoryEntry -> ExportType
readDirectoryEntry entry = ExportType {
    exportTypeName = directoryEntryName entry,
    exportTypeValues = map (\x -> NameAndPath {
            nameAndPathName = takeBaseName x,
            nameAndPathPath = x
        }) (directoryEntryFiles entry)
    }


-- x = map (\x -> dropExt x) elems

flattenDirectoryStructure :: DirectoryStructure -> [ExportType]
flattenDirectoryStructure (DirectoryStructure entries) = execWriter $ do
    mapM_ flattenDirectoryEntry entries

flattenDirectoryEntry :: DirectoryEntry -> Writer [ExportType] ()
flattenDirectoryEntry entry = do
    tell [(readDirectoryEntry entry)]
    mapM_ flattenDirectoryEntry (directoryEntrySubDirs entry)

readFullDirectoryStructure :: FilePath -> IO DirectoryStructure
readFullDirectoryStructure baseDir = do
    files <- listDirectory (baseDir </> assetsDir)
    let filesWithDir = map (\x -> baseDir </> assetsDir </> x) files
    dirs <- filterM doesDirectoryExist filesWithDir
    dirEntries <- mapM (readDirectoryStructure baseDir) dirs
    return (DirectoryStructure dirEntries)

readDirectoryStructure :: FilePath -> FilePath -> IO DirectoryEntry
readDirectoryStructure baseDir dir = do
    let fullPath = baseDir </> dir
    dirContents <- listDirectory fullPath
    (subDirs, files) <- partitionM (\x -> doesDirectoryExist (fullPath </> x)) dirContents
    subEntries <- mapM (\x -> readDirectoryStructure baseDir (fullPath </> x)) subDirs
    return DirectoryEntry
        { directoryEntryName = takeFileName (dropTrailingPathSeparator fullPath)
        , directoryEntryFiles = map (\x -> toPosixPath (makeRelative baseDir (fullPath </> x))) files
        , directoryEntrySubDirs = subEntries
        }

analyzeDirectoreStructure :: () -> ()
analyzeDirectoreStructure = undefined

outputResults :: () -> String
outputResults = undefined

-- Helper Functions

toPosixPath :: FilePath -> FilePath
toPosixPath = System.FilePath.Posix.joinPath . splitDirectories

partitionM :: Monad m => (a -> m Bool) -> [a] -> m ([a], [a])
partitionM p l = sel l [] []
  where
    sel [] ts fs = return (reverse ts, reverse fs)
    sel (x:xs) ts fs = do
        r <- p x
        if r then sel xs (x:ts) fs else sel xs ts (x:fs)



-- Data transformation Pipeline:
-- readFullDirectoryStructure -> (A -> B -> C -> D -> E -> D -> F -> String) -> Result(save the string file)
-- ^
-- Imperative                     ^ Functional Core                        ^   -> Imperative Step


-- 1. I would like to split the string "file.png" to - [file, png] so I installed a string split function from cabal, but I can't import it??
-- 2. I