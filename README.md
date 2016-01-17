#Baku
**under development, check back later**

A collection of frontend ES6 components & utilities, unlike projects like jQuery you only `import` what is needed.

**IMPORTANT**

This is a a ES6 only library and will not work with older JS code.
I recommend using [babel](https://github.com/babel/babel) and [webpack](https://github.com/webpack/webpack)

##Usage
`npm install baku --save`

####APP
`baku`

Create a new app and attach scroll/resize/render events

```
import BakuApp from 'baku';

class App extends BakuApp{
    constructor(){
      super();
    }

    resizeEvent(width, height){
      //handle resize
    }

    scrollEvent(scrollPos, height){
      //handle scroll
    }

    update(timeStamp){
      //requestanimationframe
    }
}

document.addEventListener('DOMContentLoaded', new App().activate(), false);

```
####ANIMATION
`baku/animation`

####AUDIO
`baku/audio`

####CANVAS
`baku/canvas`

```
	import {CanvasView} from 'baku/canvas';

	//width, height, container, transparent
	let stage = new CanvasView(1200, 800, document.getElementById('container'), false);


```

####COLOR
`baku/color`

####CORE
`baku/core`

####CSS
`baku/css`

####GEOMETRY
`baku/geometry`

####IMAGES
```
  import {imageLoader} from 'baku/images';

  imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
    .then((img)=>document.body.appendChild(img))
    .catch((err)=>console.log(err));
```

####LOADERS
`baku/loaders`

####POLYFILLS
`baku/polyfills`

####RANDOM
`baku/random`

####ROUTER
`baku/router`

####SLIDESHOW
`baku/slideshow`

####SOCIAL
`baku/social`

####TOUCH
`baku/touch`

####URL
`baku/url`

####VIDEO
`baku/video`

####WINDOW
`baku/window`
