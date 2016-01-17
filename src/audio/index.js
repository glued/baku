import {Lerp} from '../animation';

export function hasAudioAPI(){
  let ctx;
  try{
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  }catch(e){
    return false;
  }

  return !!ctx;
}

export class AudioEase{
  constructor(src, loop = false, startVolume = 1, speed = 0.08){
      this.audio        = new Audio(src);
      this.volumeLerp   = new Lerp(startVolume, speed, 0.1);
      this.audio.volume = startVolume;
      if(loop) this.audio.loop = true;
  }

  fadeIn(){
      this.volumeLerp.pos = 1;
  }

  fadeOut(){
      this.volumeLerp.pos = 0;
  }

  play(){
      this.audio.play();
  }

  update(){
      //CALLED FROM RENDER LOOP
      if(this.volumeLerp.easing === false) return;
      this.audio.volume = this.volumeLerp.pos;
  }
}
