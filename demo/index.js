import {imageLoader} from 'baku/images'
import {tween, multiTween} from 'baku/animation'
import {transform, transformPrefix} from 'baku/css/transforms'
import {inOutBack} from 'baku/animation/ease'

document.addEventListener('DOMContentLoaded', ()=>{

  imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
    .then((img)=>{
        document.body.appendChild(img)

        tween(0, 300, 1000, 2000, inOutBack, value => {
          img.style[transformPrefix] = transform(value)
        }).then(()=>{

          let tweens = [
            [300, 0, 1000, 10, inOutBack],
            [0, 100, 1000, 100, inOutBack]
          ]

          multiTween(tweens, values => {
            img.style[transformPrefix] = transform(...values)
          }).then(()=> console.log('done'))

        })

    }).catch(err => console.log(err))

}, false)
