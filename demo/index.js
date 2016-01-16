import App from 'baku';
import {imageLoader} from 'baku/images';
// import {transform} from '../src/css/transforms';
class SampleApp extends App{
  constructor(){
    super();

    imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
      .then((img)=>document.body.appendChild(img))
      .catch((err)=>console.log(err));

    this.start();
  }

  resizeEvent(width, height){
    console.log('resize', width, height);
  }

  scrollEvent(scrollPos, height){
    console.log('scroll', scrollPos, height);
  }
}

document.addEventListener('DOMContentLoaded', new SampleApp(), false);
