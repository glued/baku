export function randomRangeInt(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

export function clamp(val, min, max){
  return Math.min(max, Math.max(val, min))
}
