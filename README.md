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

```javascript
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

```javascript

import {tween, multiTween} from 'baku/animation';
import {inOutBack} from 'baku/animation/ease';

//start, end, duration, delay, ease, render callback

tween(0, 300, 1000, 100, inOutBack, value => {
  //animation value callback
  someDiv.style.transform = `translate3d(${value}px,0,0)`;
}).then(()=>{
  console.log('animation complete');
});

//OR MULTIPLE values
let tweens = [
  [300, 0, 1000, 10, inOutBack],
  [0, 100, 1000, 100, inOutBack]
];

multiTween(tweens, values => {
  img.style.transform = `translate3d(${values[0]}px,${values[1]}px,0)`;
}).then(()=> console.log('done'));

```

####AUDIO
`baku/audio`

####CANVAS
`baku/canvas`

```javascript
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
```javascript
import {imageLoader} from 'baku/images';

imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
  .then(img => document.body.appendChild(img))
  .catch(err => console.log(err));
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
