export default class Window{
  constructor(container){
    this.resizing   = true;
    this.scrolling  = true;
    this.scrollPos  = 0;
    this.width      = 0;
    this.height     = 0;

    window.addEventListener('resize', () => this.resizing  = true, false);
    this.container = document.getElementById(container);

    if(container)
      this.container.addEventListener('scroll', () => this.scrolling = true, false);
    else
      window.addEventListener('scroll', () => this.scrolling = true, false);
  }

  get resize(){
    if(this.resizing === false) return false;
    this.width  = window.innerWidth;
    this.height = document.documentElement.clientHeight;
    this.resizing = false;
    return true;
  }

  get scroll(){
    if(this.scrolling === false) return false;
    const top = this.container ? this.container.scrollTop : window.pageYOffset || document.body.scrollTop;
    this.scrollPos = this.height + top;
    this.scrolling = false;
    return true;
  }
}
