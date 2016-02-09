export function imageLoader(src){
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.addEventListener('load', () => resolve(img), false);
    img.addEventListener('error', () => reject('img_load_err'), false);
    img.src = src;
  });
}
