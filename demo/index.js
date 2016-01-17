import {imageLoader} from 'baku/images';
import {tween} from 'baku/animation';
import {inOutBack} from 'baku/animation/ease';

document.addEventListener('DOMContentLoaded', ()=>{

  imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
    .then((img)=>{
        document.body.appendChild(img);

        tween(0, 300, 1000, 10, inOutBack, value => {
          img.style.transform = `translate3d(${value}px,0,0)`;
        }).then(()=>{
          tween(300, 0, 1000, 1000, inOutBack, (value)=>{
            img.style.transform = `translate3d(${value}px,0,0)`;
          });
        });

    }).catch(err => console.log(err));

}, false);
