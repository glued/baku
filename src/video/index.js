// export default class VideoPlayer{
//   constructor(src){
//     this.video = document.createElement('VIDEO')
//     //TODO: FINISH
//   }
// }

export function resizeCover(videoWidth, videoHeight, containerWidth, containerHeight){
  const containerAspectRatio  = containerWidth / containerHeight
  const videoAspectRatio      = videoWidth / videoHeight

  let newWidth  = 0
  let newHeight = 0
  let offsetX   = 0
  let offsetY   = 0

  if(containerAspectRatio > videoAspectRatio){
    newWidth  = containerWidth
    newHeight = ~~(newWidth / videoAspectRatio)
    offsetY   = -(newHeight >> 1) + (containerHeight >> 1)
  }else{
    newHeight = containerHeight
    newWidth  = ~~(newHeight * videoAspectRatio)
    offsetX   = -(newWidth >> 1) + (containerWidth >> 1)
  }

  return [newWidth, newHeight, offsetX, offsetY]
}
