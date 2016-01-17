#Baku

A collection of frontend ES6 components & utilities

**IMPORTANT**

This is an ES6 only library and will not work with older JS code

##Usage

####APP
Create a new app and attach scroll/resize/render events

```
import BakuApp from 'baku';

class App extends BakuApp{
    constructor(){
      super();
    }

    resizeEvent(width, height){
      this.chapters.resize(width, height);
    }

    scrollEvent(scrollPos, height){
      this.chapters.scroll(scrollPos, height);
    }

    update(){
      this.chapters.update();
    }
}

document.addEventListener('DOMContentLoaded', new App().activate(), false);

```

####ANIMATION
```

```

####CANVAS
```
	import {CanvasView} from 'baku/canvas';
	
	//width, height, container, transparent
	let stage = new CanvasView(1200, 800, document.getElementById('container'), false);
	
	
```

####IMAGES
```
  import {imageLoader} from 'baku/images';

  imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
    .then((img)=>document.body.appendChild(img))
    .catch((err)=>console.log(err));
```

**under development, check back later**
Baku | Japanese supernatural beings that devour dreams and nightmares. [wikipedia](https://en.wikipedia.org/wiki/Baku_(spirit))
