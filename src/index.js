import Window from './window';
import './polyfills/raf'; //REQUESTANIMATIONFRAME POLYFILL

let _this;
let _window;

export class Component{

  resize(/*width, height*/){}

  scroll(/*scrollPos, height*/){}

  update(/*timeStamp*/){}
}

export class App{
  constructor(){
    this.components = [];
  }

  resizeEvent(width, height){
    for(let i = 0, len = this.components.length; i < len; i++)
      this.components[i].resize(width, height);
  }

  scrollEvent(scrollPos, height){
    for(let i = 0, len = this.components.length; i < len; i++)
      this.components[i].scroll(scrollPos, height);
  }

  update(timeStamp){
    for(let i = 0, len = this.components.length; i < len; i++)
      this.components[i].update(timeStamp);
  }

  start(container){
    init(this, container);
  }

}

function init(app, container){
  if(_this) return;
  _window = new Window(container);
  _this = app;
  loop();
}

function loop(timeStamp){
  requestAnimationFrame(loop);

  if(_window.resize === true){
    const { width, height } = _window;
    _this.resizeEvent(width, height);
  }else if(_window.scroll === true){
    const { scrollPos, height } = _window;
    _this.scrollEvent(scrollPos, height);
  }

  // const timeStamp = Date.now();
  _this.update(timeStamp);
}
