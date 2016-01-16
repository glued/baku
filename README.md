#Baku
Japanese supernatural beings that devour dreams and nightmares. [wikipedia](https://en.wikipedia.org/wiki/Baku_(spirit))
A collection of frontend ES6 components & utilities

**IMPORTANT**
This is an ES6 only library and will not work with older JS code

###Usage Example

```
  import {imageLoader} from 'baku/images';

  imageLoader('https://c2.staticflickr.com/6/5759/24053243841_a870243909.jpg')
    .then((img)=>document.body.appendChild(img))
    .catch((err)=>console.log(err));
```

**under development, check back later**
