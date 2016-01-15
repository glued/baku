import {linear} from './ease';

export class Tween{
  constructor(startPos = 0, endPos = 0, duration = 0, delay = 0, easingEquation = linear){
    this.paused     = false;
    this.startPos   = startPos;
    this.endPos     = endPos;
    this.duration   = duration;
    this.delay      = delay;
    this.equation   = easingEquation;
    this.currentPos = startPos;
    this.startTime  = 0;
    this.easing     = true;
    this.started    = false;
  }

  reset(){
    this.startTime  = 0;
    this.currentPos = this.startPos;
    this.easing     = true;
    this.started    = false;
  }

  set pos(endPos){
    this.startTime  = 0;
    this.currentPos = this.startPos;
    this.endPos     = endPos;
    this.easing     = true;
  }

  pause(){
    this.paused = true;
  }

  play(){
    this.paused = false;
  }

  ease(now){
    if(this.paused === true) return this.currentPos;
    const duration  = this.duration;
    const endPos    = this.endPos;
    const startPos  = this.startPos;
    const delay     = this.delay;

    if(!now || this.easing === false)
      return endPos;

    if(this.startTime === 0 && now)
      this.startTime = now;

    let diff = now - this.startTime;

    diff = diff - delay;

    if(diff < 0) return startPos;

    if(diff >= duration) {
      this.currentPos = endPos;
      this.easing = false;
      return  this.currentPos;
    }

    const elapsed = diff / this.duration;
    const df = endPos - startPos;

    this.started = true;
    this.currentPos = startPos + df * this.equation(elapsed);

    return  this.currentPos;
  }
}

export class Lerp{
    constructor(initialValue, speed, threshold = 0.5){
        this.currentPos = initialValue;
        this.startPos   = initialValue;
        this.endPos     = initialValue;
        this.speed      = speed;
        this.threshold  = threshold;
        this.easing     = false;
    }

    finish(){
        this.easing     = false;
        this.currentPos = this.endPos;
    }

    reset(){
        this.currentPos = this.startPos;
        this.easing     = true;
    }

    set pos(endPos){
        this.endPos = endPos;
        this.easing = true;
    }

    set forced(endPos){
        this.endPos     = endPos;
        this.startPos   = endPos;
        this.currentPos = endPos;
        this.easing     = true;
    }

    get pos(){
        if(this.easing === false) return this.currentPos;

        const endPos    = this.endPos;
        const speed     = this.speed;
        const threshold = this.threshold;

        this.currentPos += (endPos - this.currentPos) * speed;

        const direction   = this.currentPos > endPos;
        const offset      = direction ? threshold : -threshold;
        const limit       = this.currentPos - offset;

        if(direction){
            if(limit <= endPos) this.finish();
        }else{
            if(limit >= endPos) this.finish();
        }

        return this.currentPos;
    }
}
