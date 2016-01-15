import {supportsCSS} from './';

export const transformPrefix = (() => {
  const prefixes = ['Webkit', 'transform', 'ms', 'Moz', 'O'];
  const trans = prefixes[1];
  if(supportsCSS && CSS.supports('transform', 'scale(1,1)')) return trans;

  const temp = document.createElement('DIV');

  for(let i = 0; i < prefixes.length; i++){
     let prefix    = prefixes[i];
     let transPrefix = prefix !== trans ? prefix + 'Transform' : trans;
     if (temp.style[transPrefix] !== undefined) return transPrefix;
  }
})();

export const has3dTransform  = (() => {
  const transTest = 'translate3d(1px,1px,1px)';
  if(supportsCSS && CSS.supports('transform', transTest)) return true;

  let has3d;
  let body = document.body;
  let temp = document.createElement('P');

  body.insertBefore(temp, null);

  if(temp.style[transformPrefix] !== undefined){
      temp.style[transformPrefix] = transTest;
      let trans = 'transform';
      let cssProp = transformPrefix === trans ? trans : `-${transformPrefix.toLowerCase()}-${trans}`;
      has3d = window.getComputedStyle(temp).getPropertyValue(cssProp);
  }

  body.removeChild(temp);

  return (has3d !== undefined && has3d !== '');
})();

export function transform(x, y, z){
    if(has3dTransform === true)
      return `translate3d(${x}px,${y}px,${z}px)`;

    return `translate(${x}px,${y}px)`;
}
