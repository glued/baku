export default class Lerp{
    constructor(initialValue, speed, threshold = 0.5, friction = 0){
        this.currentPos = initialValue
        this.startPos   = initialValue
        this.endPos     = initialValue
        this.speed      = speed
        this.threshold  = threshold
        this.easing     = false
        this.easeIn     = speed
        this.friction   = friction
    }

    finish(){
        this.easeIn     = 0
        this.easing     = false
        this.currentPos = this.endPos
    }

    reset(){
        this.currentPos = this.startPos
        this.easing     = true
    }

    set pos(endPos){
        if(this.endPos === endPos) return
        this.endPos = endPos

        if(!this.easing)
          this.easeIn = 0
        else
          this.easeIn -= this.friction

        this.easing = true
    }

    set forced(endPos){
        this.endPos     = endPos
        this.startPos   = endPos
        this.currentPos = endPos
        this.easing     = true
    }

    get pos(){
        if(this.easing === false) return this.currentPos

        const { endPos, speed, threshold, friction } = this

        if(friction > 0){
          if(this.easeIn < this.speed)
            this.easeIn += friction
          else
            this.easeIn = this.speed

          this.currentPos += (endPos - this.currentPos) * this.easeIn
        }else{
          this.currentPos += (endPos - this.currentPos) * speed
        }

        const direction   = this.currentPos > endPos
        const offset      = direction ? threshold : -threshold
        const limit       = this.currentPos - offset

        if(direction){
            if(limit <= endPos) this.finish()
        }else{
            if(limit >= endPos) this.finish()
        }

        return this.currentPos
    }
}
