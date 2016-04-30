// easing functions from "Tween.js" / Robert Penner modified for ES6
//createjs.com/tweenjs
const SPEED_BACK = 1.70158
const SPEED_IOBACK = 2.5949095

export default{
  linear:n => n,

  inQuad:n => n * n,

  outQuad:n => n * (2 - n),

  inOutQuad: n => {
    if((n *= 2) < 1) return 0.5 * n * n
    return -0.5 * (--n * (n - 2) - 1)
  },

  inBack:n => n * n * ((SPEED_BACK + 1) * n - SPEED_BACK),

  outBack:n => --n * n * ((SPEED_BACK + 1) * n + SPEED_BACK) + 1,

  inOutBack:n => {
    const s = SPEED_IOBACK
    const s1 = s + 1
    n *= 2
    if(n < 1) return 0.5 * (n * n * (s1 * n - s))
    n -= 2
    return 0.5 * (n * n * (s1 * n + s) + 2)
  },

  inCube: n => n * n * n,

  outCube: n => --n * n * n + 1,

  inOutCube: n => {
    n *= 2
    if (n < 1) return 0.5 * n * n * n
    return 0.5 * ((n -= 2) * n * n + 2)
  },

  inExpo: n => n === 0 ? 0 : Math.pow(1024, n - 1),

  outExpo: n => n === 1 ? 1 : 1 - Math.pow(2, -10 * n),

  inOutExpo: n => {
    if(n === 0) return 0
    if(n === 1) return 1
    if((n *= 2) < 1) return 0.5 * Math.pow(1024, n - 1)
    return 0.5 * (-Math.pow(2, -10 * (n - 1)) + 2)
  }
}
