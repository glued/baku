import {imageLoader} from 'baku/images';
import {tween, multiTween} from 'baku/animation';
import {inOutBack} from 'baku/animation/ease';

//STANDALONE TWEEN

document.addEventListener('DOMContentLoaded', ()=>{

  imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
    .then((img)=>{
        document.body.appendChild(img);

        tween(0, 300, 1000, 10, inOutBack, value => {
          img.style.transform = `translate3d(${value}px,0,0)`;
        }).then(()=>{

          let tweens = [
            [300, 0, 1000, 10, inOutBack],
            [0, 100, 1000, 100, inOutBack]
          ];

          multiTween(tweens, values => {
            img.style.transform = `translate3d(${values[0]}px,${values[1]}px,0)`;
          }).then(()=> console.log('done'));

        });

    }).catch(err => console.log(err));

}, false);
