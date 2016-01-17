import {findParentLI, getChildIndex, createElem} from '../core';
import {Lerp} from '../animation';
import Slide from './slide';

export default class Slideshow{
  constructor(container, prefix = 'baku'){
    this.container    = container;
    this.slides       = [];
    this.animator     = new Lerp(0, 0.12, 0.002);
    this.currentIdx   = 0;
    this.width        = 0;
    this.max          = 0;
    this.leftArrow    = null;
    this.rightArrow   = null;
    this.holderUL     = null;
    this.timer        = null;
    this.timeout      = 0;

    //GENERATE SLIDES///////////////////////////////////////////
    let slideHolder   = container.querySelector(`.${prefix}-slides`);
    this.total = slideHolder.children.length;
    if(this.total === 1) return;
    for(let i = 0; i < this.total; i++)
      this.slides.push(new Slide(slideHolder.children[i], i));

    //GENERATE ARROWS IF data-arrows EXISTS/////////////////////
    let hasArrows = this.container.getAttribute('data-arrows');
    if(hasArrows){
      this.leftArrow = createElem('A');
      this.rightArrow = this.leftArrow.cloneNode();

      this.leftArrow.className = `${prefix}-prev`;
      this.rightArrow.className = `${prefix}-next`;

      this.leftArrow.addEventListener('click', () => this.prevSlide(), false);
      this.rightArrow.addEventListener('click', () => this.nextSlide(), false);

      this.container.appendChild(this.leftArrow);
      this.container.appendChild(this.rightArrow);
    }

    //GENERATE PAGINATION OF data-pagination EXISTS/////////////////////
    let hasPagination = this.container.getAttribute('data-pagination');
    if(hasPagination){
      this.holderUL = createElem('UL');

      let li = createElem('LI');
      let clonedLi;
      for(let i = 0; i < this.total; i++){
        clonedLi = li.cloneNode();
        if(i === 0) clonedLi.className = 'active';
        this.holderUL.appendChild(clonedLi);
      }

      this.holderUL.className = `${prefix}-pagination`;
      this.holderUL.addEventListener('click', e => this.paginationClickEvent(e), false);
      this.container.appendChild(this.holderUL);

    }

    this.arrowCheck();

    //AUTOPLAY
    let hasAutoplay = this.container.getAttribute('data-autoplay');
    if(!hasAutoplay) return;
    this.timeout = parseInt(hasAutoplay, 10) * 1000;
    this.container.addEventListener('mousemove', () =>  this.autoPlay(), false);
    this.autoPlay();

    document.addEventListener('visibilitychange', () => {
      if(document.hidden)
        clearTimeout(this.timer);
      else
        this.autoPlay();
    }, false);
  }

  autoPlay(){
    if(!this.timeout) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
        this.nextSlide();
    }, this.timeout);
  }

  arrowCheck(){
    let current = Math.abs(this.currentIdx % this.total);
    this.updatePagination(current);
    this.autoPlay();
  }

  updatePagination(idx){
    if(!this.holderUL) return;
    let active = this.holderUL.querySelector('.active');
    if(active) active.className = '';
    this.holderUL.children[idx].className = 'active';
  }

  paginationClickEvent(e){
    let target = e.target;
    let li = findParentLI(target);
    if(!li)return;
    let idx = getChildIndex(li);
    if(this.currentIdx === idx) return;
    this.jumpToSlide(idx);
  }

  jumpToSlide(idx){
    this.currentIdx = idx;
    this.animator.pos = -this.currentIdx * this.width;
    this.arrowCheck();
  }

  nextSlide(){
    let nextSlide = this.currentIdx + 1;
    this.jumpToSlide(nextSlide);
  }

  prevSlide(){
    let prevSlide = this.currentIdx - 1;
    this.jumpToSlide(prevSlide);
  }

  resize(width){
    width = this.container.offsetWidth;
    this.width = width;
    this.max = this.total * this.width;
    let pos = -this.currentIdx * this.width;

    this.animator.currentPos  = pos;
    this.animator.endPos = pos;
    this.render(true);
  }

  render(){
    let pos = this.animator.pos;
    let width = this.width;
    let max = this.max;
    for(let i = 0; i < this.slides.length; i++)
      this.slides[i].move(pos, width, max);
  }
}

//STANDALONE COMPONENT
let slideshows = [];

export function activateAllSlideshows(prefix = 'baku'){
  let containers = document.querySelectorAll(`.${prefix}-slideshow`);

  for(let show of containers)
    slideshows.push(new Slideshow(show));

    window.addEventListener('resize', ()=>{
      const width = window.innerWidth;
      for(let i = 0; i < slideshows.length; i++)
        slideshows[i].resize(width);
    }, false);

  loop();
}

function loop(){
  requestAnimationFrame(loop);

  for(let i = 0; i < slideshows.length; i++)
    slideshows[i].render();
}
