// easing functions from "Tween.js" / Robert Penner modified for ES6
//createjs.com/tweenjs

export function linear(n){
  return n;
}

export function inBack(n){
  const s = 1.70158;
  return n * n * ((s + 1) * n - s);
}

export function outBack(n){
  const s = 1.70158;
  return --n * n * ((s + 1) * n + s) + 1;
}

export function inOutBack(n){
  const s = 1.70158 * 1.525;
  const s1 = s + 1;
  n *= 2;
  if(n < 1) return 0.5 * (n * n * (s1 * n - s));
  n -= 2;
  return 0.5 * (n * n * (s1 * n + s) + 2);
}

export function inCube(n){
  return n * n * n;
}

export function outCube(n){
  return --n * n * n + 1;
}

export function inOutCube(n){
  n *= 2;
  if (n < 1) return 0.5 * n * n * n;
  return 0.5 * ((n -= 2) * n * n + 2);
}

export function inOutExpo(n){
  if(n === 0) return 0;
  if(n === 1) return 1;
  if((n *= 2) < 1) return 0.5 * Math.pow(1024, n - 1);
  return 0.5 * (-Math.pow(2, -10 * (n - 1)) + 2);
}
