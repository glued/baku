// easing functions from "Tween.js" / Robert Penner modified for ES6
//createjs.com/tweenjs
export default{
  linear:n => n,

  inBack:n => {
    const s = 1.70158
    return n * n * ((s + 1) * n - s)
  },

  outBack:n => {
    const s = 1.70158
    return --n * n * ((s + 1) * n + s) + 1
  },

  inOutBack:n => {
    const s = 2.5949095
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

  inOutExpo: n => {
    if(n === 0) return 0
    if(n === 1) return 1
    if((n *= 2) < 1) return 0.5 * Math.pow(1024, n - 1)
    return 0.5 * (-Math.pow(2, -10 * (n - 1)) + 2)
  }
}
