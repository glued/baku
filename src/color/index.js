export class RGBColor{
  constructor(red, green, blue, alpha = 1){
    this.red    = red
    this.green  = green
    this.blue   = blue
    this.alpha  = alpha
  }

  get string(){
    const { red, green, blue, alpha } = this
    if(alpha === 1)
      return `rgb(${red},${green},${blue})`
    else
      return `rgba(${red},${green},${blue},${alpha})`
  }
}

export class HSLColor{
  constructor(hue, sat, lum, alpha = 1){
    this.hue    = hue
    this.sat    = sat
    this.lum    = lum
    this.alpha  = alpha
  }

  get string(){
    const { hue, sat, lum, alpha } = this
    if(alpha === 1)
      return `hsl(${hue},${sat},${lum})`
    else
      return `hsla(${hue},${sat},${lum},${alpha})`
  }
}
