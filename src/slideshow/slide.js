import {transformPrefix, transform} from '../css/transforms';

export default class Slide{
  constructor(element, i){
    this.elemStyle = element.style;
    this.idx = i;
  }

  move(pos, width, max){

    let position = width * this.idx + pos + width;

    position %= max; // INFINITE SCROLL ->

    if(position < 0) position = position + max; // INFINITE SCROLL <-

    let newPos = position - width;

    this.elemStyle[transformPrefix] = transform(newPos, 0);
  }
}
