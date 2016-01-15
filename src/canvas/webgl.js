export const hasWebGl = (()=>{
  if(window.WebGLRenderingContext) {
    let canvas = document.createElement('CANVAS');
    let ctx;
    try {
      ctx = canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true }) || canvas.getContext('experimental-webgl');
    }catch(e){
      return false;
    }

    return !!ctx;
  }

  return false;
})();
