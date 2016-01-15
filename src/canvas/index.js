export class CanvasView{
  constructor(width, height, container, alpha = true){
    this.canvas         = document.createElement('CANVAS');
    this.ctx            = this.canvas.getContext('2d', { alpha: alpha });
    this.canvas.width   = width;
    this.canvas.height  = height;
    container.appendChild(this.canvas);
  }
}

export const pixelRatio = (() => {
    if('devicePixelRatio' in window && window.devicePixelRatio > 1) return window.devicePixelRatio;
    return 1;
})();
