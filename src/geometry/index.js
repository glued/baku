export const PI                 = 3.14159265359
export const PI2                = PI * 2
export const DEGREES_TO_RADIANS = PI / 180

export class Point{
  constructor(x = 0, y = 0){
    this.x = x
    this.y = y
  }

  static dist(ptA, ptB){
    const distX = ptA.x - ptB.x
    const distY = ptA.y - ptB.y
    return Math.sqrt(distX * distX + distY * distY)
  }

  static approxDist(ptA, ptB){
    return Math.abs(ptA.x - ptB.x) + Math.abs(ptA.y - ptB.y)
  }
}

export function toRadians(degrees){
  return degrees * DEGREES_TO_RADIANS
}

export function polar(radius, angle){
  const x = radius * Math.cos(angle)
  const y = radius * Math.sin(angle)
  return new Point(x, y)
}

export class Rectangle{
    constructor(x = 0, y = 0, width = 0, height = 0){
      this.x      = x
      this.y      = y
      this.width  = width
      this.height = height
    }

    get right(){
      return this.x + this.width
    }

    get bottom(){
      return this.y + this.height
    }

    get top(){
      return this.y
    }

    get left(){
      return this.x
    }

    get centerPoint(){
      return new Point(this.x, this.y)
    }
}
