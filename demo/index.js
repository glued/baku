import {imageLoader} from 'baku/images';

document.addEventListener('DOMContentLoaded', ()=>{
  imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
    .then((img)=>document.body.appendChild(img))
    .catch((err)=>console.log(err));

}, false);
