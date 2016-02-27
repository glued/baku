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

export function canAutoplay(){
  return new Promise(resolve => {
    let elem = document.createElement('video')
    let elemStyle = elem.style
    elem.src = 'data:video/mp4;base64,AAAAFGZ0eXBNU05WAAACAE1TTlYAAAOUbW9vdgAAAGxtdmhkAAAAAM9ghv7PYIb+AAACWAAACu8AAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAnh0cmFrAAAAXHRraGQAAAAHz2CG/s9ghv4AAAABAAAAAAAACu8AAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAFAAAAA4AAAAAAHgbWRpYQAAACBtZGhkAAAAAM9ghv7PYIb+AAALuAAANq8AAAAAAAAAIWhkbHIAAAAAbWhscnZpZGVBVlMgAAAAAAABAB4AAAABl21pbmYAAAAUdm1oZAAAAAAAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAVdzdGJsAAAAp3N0c2QAAAAAAAAAAQAAAJdhdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAFAAOABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAAEmNvbHJuY2xjAAEAAQABAAAAL2F2Y0MBTUAz/+EAGGdNQDOadCk/LgIgAAADACAAAAMA0eMGVAEABGjuPIAAAAAYc3R0cwAAAAAAAAABAAAADgAAA+gAAAAUc3RzcwAAAAAAAAABAAAAAQAAABxzdHNjAAAAAAAAAAEAAAABAAAADgAAAAEAAABMc3RzegAAAAAAAAAAAAAADgAAAE8AAAAOAAAADQAAAA0AAAANAAAADQAAAA0AAAANAAAADQAAAA0AAAANAAAADQAAAA4AAAAOAAAAFHN0Y28AAAAAAAAAAQAAA7AAAAA0dXVpZFVTTVQh0k/Ou4hpXPrJx0AAAAAcTVREVAABABIAAAAKVcQAAAAAAAEAAAAAAAAAqHV1aWRVU01UIdJPzruIaVz6ycdAAAAAkE1URFQABAAMAAAAC1XEAAACHAAeAAAABBXHAAEAQQBWAFMAIABNAGUAZABpAGEAAAAqAAAAASoOAAEAZABlAHQAZQBjAHQAXwBhAHUAdABvAHAAbABhAHkAAAAyAAAAA1XEAAEAMgAwADAANQBtAGUALwAwADcALwAwADYAMAA2ACAAMwA6ADUAOgAwAAABA21kYXQAAAAYZ01AM5p0KT8uAiAAAAMAIAAAAwDR4wZUAAAABGjuPIAAAAAnZYiAIAAR//eBLT+oL1eA2Nlb/edvwWZflzEVLlhlXtJvSAEGRA3ZAAAACkGaAQCyJ/8AFBAAAAAJQZoCATP/AOmBAAAACUGaAwGz/wDpgAAAAAlBmgQCM/8A6YEAAAAJQZoFArP/AOmBAAAACUGaBgMz/wDpgQAAAAlBmgcDs/8A6YEAAAAJQZoIBDP/AOmAAAAACUGaCQSz/wDpgAAAAAlBmgoFM/8A6YEAAAAJQZoLBbP/AOmAAAAACkGaDAYyJ/8AFBAAAAAKQZoNBrIv/4cMeQ=='
    let timeout = 0

    let testAutoplay = evt => {
      clearTimeout(timeout)
      elem.removeEventListener('playing', testAutoplay, false)
      elem.parentNode.removeChild(elem)
      let active = evt && evt.type === 'playing' || evt.currentTime !== 0
      resolve(active)
    }

    elemStyle.position = 'absolute'
    elemStyle.height = 0
    elemStyle.width = 0
    elem.autoplay = true
    elem.style.cssText = 'display:none'

    document.body.appendChild(elem)

    setTimeout(() =>{
      elem.addEventListener('playing', testAutoplay, false)
      timeout = setTimeout(()=>testAutoplay(elem), 300)
    }, 0)
  })
}
