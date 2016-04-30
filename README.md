# Baku
**under development, check back later**

[![npm version](https://badge.fury.io/js/baku.svg)](https://badge.fury.io/js/baku)

A collection of frontend ES6 components & utilities, unlike projects like jQuery you only `import` what is needed.

**IMPORTANT**

This is a a ES6 only library and will not work with older JS code.
I recommend using [babel](https://github.com/babel/babel) and [webpack](https://github.com/webpack/webpack)

## Usage
`npm install baku --save`

#### APP
`baku`

Create a new app and attach scroll/resize/render events

```javascript
import BakuApp from 'baku'

class App extends BakuApp{
    constructor(){
      super()
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

document.addEventListener('DOMContentLoaded', () => new App().activate(), false)

```

#### ANIMATION
`baku/animation`

```javascript

import { tween, multiTween } from 'baku/animation'
import ease from 'baku/animation/ease'

//start, end, duration, delay, ease, render callback, start callback
tween(0, 300, 1000, 100, ease.inOutBack, value => {
    //animation value callback
    someDiv.style.transform = `translate3d(${value}px,0,0)`
  },
  () => {
    console.log('animation started') //optional
  }).then(()=>{
    console.log('animation complete')
})

//OR MULTIPLE values
let tweens = [
  [300, 0, 1000, 10, ease.inOutBack],
  [0, 100, 1000, 100, ease.inOutBack]
]

multiTween(tweens, values => {
  img.style.transform = `translate3d(${values[0]}px,${values[1]}px,0)`
}).then(() => console.log('done'))
```

`baku/animation/ease`

* linear
* inBack
* outBack
* inOutBack
* inCube
* outCube
* inOutCube
* inOutExpo

`baku/animation/lerp`

```javascript
import Lerp from 'baku/animation/lerp'

let mover = new Lerp(0, 0.1)//start, speed, stop threshold, friction
mover.pos = 200

update(timeStamp){
  if(mover.easing === true)
    img.style.transform = `translate3d(${mover.pos}px,0,0)`
  //requestanimationframe
}

```

#### AUDIO
`baku/audio`

```javascript
import { hasAudioAPI, AudioEase } from 'baku/audio'

```
#### CANVAS
`baku/canvas`

```javascript
import { CanvasView, pixelRatio } from 'baku/canvas'

//width, height, container, transparent
let stage = new CanvasView(1200, 800, document.getElementById('container'), false)

let pxr = pixelRatio() //get multibrowser pixel ratio

```

#### COLOR
`baku/color`
```javascript
import { RGBColor, HSLColor } from 'baku/color'
let rgb = new RGBColor(255, 232, 123, 0.5)//red green blue alpha = 1
let hsl = new HSLColor(191, 42, 61, 0.2)//hue, sat, lum, alpha = 1
```

#### CORE
`baku/core`

```javascript
import { getElem, createElem, findParentLI, getChildIndex } from 'baku/core'
//get dom element
let someElem = getElem('some-id') //getElementById
let anotherElem = getElem('.some-class', true) //querySelector

//create dom element
let createdElem = createElem('LI', 'right') //create an element and apply classname

```
#### CSS
`baku/css`
```javascript
import { checkCSS } from 'baku/css'
//check if browser supports css properties
let hasObjectFit = checkCSS('object-fit', 'contain')

```
####GEOMETRY
`baku/geometry`

####IMAGES
```javascript
import {imageLoader} from 'baku/images'

imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
  .then(img => document.body.appendChild(img))
  .catch(err => console.log(err))
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
