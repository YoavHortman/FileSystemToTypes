
function loadImages(images: string[], cb: (loadedImages: LoadedImages) => void) {
    const x: LoadedImages = {};
    for (const key in ImagesFiles) {
        x[key] = new Object();
    }
}

loadImage(() => {
    imagesFiles
});

loadAudioFiles(audioFiles, () => {

});

export const imagesFiles: { [K in ImageAssets]: [] } = {
    'florinda1': [],
    'florinda2': [],
    'florinda3': []   
}

// export type ImageAssets = IconDirFiles;

export type IconDirFiles = 'florinda0' |
"X" |
  'florinda1' |
  'florinda2' |
  'florinda3' |
  'florinda4' |
  'florinda5' |
  'florinda6' |
  'floripondia0' |
  'floripondia1' |
  'floripondia2' |
  'floripondia3' |
  'floripondia4' |
  'floripondia5' |
  'floripondia6' |
  'fiorella0' |
  'fiorella1' |
  'fiorella2' |
  'fiorella3' |
  'fiorella4' |
  'fiorella5' |
  'fiorella6' |
  'florencia0' |
  'florencia1' |
  'florencia2' |
  'florencia3' |
  'florencia4' |
  'florencia5' |
  'florencia6' |
  'florita0' |
  'florita1' |
  'florita2' |
  'florita3' |
  'florita4' |
  'florita5' |
  'florita6' |
  'test_candy0' |
  'test_candy1' |
  'test_candy2' |
  'test_candy3' |
  'test_candy4' |
  'test_candy5' |
  'test_candy6' |
  'test_candy7' |
  'test_candy8' |
  'candy0' |
  'candy1' |
  'candy2' |
  'candy3' |
  'eye0' |
  'eye1' |
  'background' |
  'moon0' |
  'moon1' |
  'moon2' |
  'moon3' |
  'rocketHandLeft' |
  'rocketHandRight' |
  'blackhole' |
  'crown0' |
  'crown1' |
  'crown2' |
  'crown3' |
  'crown4' |
  'crown5' |
  'crown6' |
  'crown7' |
  'crown8' |
  'crown9' |
  'crown10' |
  'crown11' |
  'crown12' |
  'crown13' |
  'crown14' |
  'crown15' |
  'crown16' |
  'powerUpBigger' |
  'powerUpFast' |
  'powerUpGravity' |
  'powerUpMeteors' |
  'powerUpShield';
export type AudioAssets =
  'food0' |
  'food1' |
  'food2' |
  'gameMusic' |
  'mediumCollision0' |
  'mediumCollision1' |
  'weakCollision0' |
  'weakCollision1' |
  'weakCollision2' |
  'powerfulCollision0' |
  'powerfulCollision1' |
  'powerfulCollision2' |
  'powerfulCollision3' |
  'endMusic' |
  'powerUp0' |
  'powerUp1' |
  'powerUp2' |
  'click0' |
  'click1' |
  'click2' |
  'click3' |
  'click4' |
  'click5' |
  'click6' |
  'click7' |
  'click8' |
  'click9' |
  'click10';

export type LoadedImages = { [K in ImageAssets]: HTMLImageElement };
export type LoadedAudio = { [K in AudioAssets]: HTMLAudioElement };

export const preloadAssets = (statusCallback: (percentage: string) => void, doneCallback: (images: LoadedImages, audio: LoadedAudio) => void) => {
  const imagesData {
      'florinda0': {path: string, suffix: string}
  }


  const images: LoadedImages = {
    'florinda0': new Image(),
    'florinda1': new Image(),
    'florinda2': new Image(),
    'florinda3': new Image(),
    'florinda4': new Image(),
    'florinda5': new Image(),
    'florinda6': new Image(),
    'floripondia0': new Image(),
    'floripondia1': new Image(),
    'floripondia2': new Image(),
    'floripondia3': new Image(),
    'floripondia4': new Image(),
    'floripondia5': new Image(),
    'floripondia6': new Image(),
    'fiorella0': new Image(),
    'fiorella1': new Image(),
    'fiorella2': new Image(),
    'fiorella3': new Image(),
    'fiorella4': new Image(),
    'fiorella5': new Image(),
    'fiorella6': new Image(),
    'florencia0': new Image(),
    'florencia1': new Image(),
    'florencia2': new Image(),
    'florencia3': new Image(),
    'florencia4': new Image(),
    'florencia5': new Image(),
    'florencia6': new Image(),
    'florita0': new Image(),
    'florita1': new Image(),
    'florita2': new Image(),
    'florita3': new Image(),
    'florita4': new Image(),
    'florita5': new Image(),
    'florita6': new Image(),
    'test_candy0': new Image(),
    'test_candy1': new Image(),
    'test_candy2': new Image(),
    'test_candy3': new Image(),
    'test_candy4': new Image(),
    'test_candy5': new Image(),
    'test_candy6': new Image(),
    'test_candy7': new Image(),
    'test_candy8': new Image(),
    'candy0': new Image(),
    'candy1': new Image(),
    'candy2': new Image(),
    'candy3': new Image(),
    'eye0': new Image(),
    'eye1': new Image(),
    'background': new Image(),
    'moon0': new Image(),
    'moon1': new Image(),
    'moon2': new Image(),
    'moon3': new Image(),
    'rocketHandLeft': new Image(),
    'rocketHandRight': new Image(),
    'blackhole': new Image(),
    'crown0': new Image(),
    'crown1': new Image(),
    'crown2': new Image(),
    'crown3': new Image(),
    'crown4': new Image(),
    'crown5': new Image(),
    'crown6': new Image(),
    'crown7': new Image(),
    'crown8': new Image(),
    'crown9': new Image(),
    'crown10': new Image(),
    'crown11': new Image(),
    'crown12': new Image(),
    'crown13': new Image(),
    'crown14': new Image(),
    'crown15': new Image(),
    'crown16': new Image(),
    'powerUpBigger': new Image(),
    'powerUpFast': new Image(),
    'powerUpGravity': new Image(),
    'powerUpMeteors': new Image(),
    'powerUpShield': new Image()
  };
  const audio: LoadedAudio = {
    'food0': new Audio(),
    'food1': new Audio(),
    'food2': new Audio(),
    'gameMusic': new Audio(),
    'mediumCollision0': new Audio(),
    'mediumCollision1': new Audio(),
    'weakCollision0': new Audio(),
    'weakCollision1': new Audio(),
    'weakCollision2': new Audio(),
    'powerfulCollision0': new Audio(),
    'powerfulCollision1': new Audio(),
    'powerfulCollision2': new Audio(),
    'powerfulCollision3': new Audio(),
    'endMusic': new Audio(),
    'powerUp0': new Audio(),
    'powerUp1': new Audio(),
    'powerUp2': new Audio(),
    'click0': new Audio(),
    'click1': new Audio(),
    'click2': new Audio(),
    'click3': new Audio(),
    'click4': new Audio(),
    'click5': new Audio(),
    'click6': new Audio(),
    'click7': new Audio(),
    'click8': new Audio(),
    'click9': new Audio(),
    'click10': new Audio(),
  };

  let loaded = 0;
  const onLoad = () => {
    loaded++;
    if (loaded === totalAssets) {
      doneCallback(images, audio)
    } else {
      statusCallback(((loaded / totalAssets) * 100).toFixed(1))
    }
  }
  let didShowError = false;
  const onError = (name: string) => {
    if (!didShowError) {
      alert(name + ' Some assets can not be loaded, try refreshing the page')
      didShowError = true;
    }
  };
  const imageKeys = Object.keys(images) as ImageAssets[];
  const audioKeys = Object.keys(audio) as AudioAssets[];
  const totalAssets = imageKeys.length + audioKeys.length;
  for (const key of imageKeys) {
    images[key].onload = onLoad;
    images[key].onerror = () => onError(key);
    // Hacky but background should be a png
    if (key === "background") {
      images[key].src = './assets/images/' + key + '.jpg';
    } else {
      images[key].src = './assets/images/' + key + '.png';
    }
  }
  for (const key of audioKeys) {
    audio[key] = new Audio();
    audio[key].oncanplaythrough = onLoad;
    audio[key].onerror = () => onError(key);
    audio[key].src = './assets/sound/' + key + '.mp3';
  }
}
