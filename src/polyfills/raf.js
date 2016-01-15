// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license

(function() {
  const vendors = ['ms', 'moz', 'webkit', 'o'];
  const af = 'AnimationFrame';
  let lastTime = 0;

  for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      const vendor = vendors[x];
      window.requestAnimationFrame  = window[`${vendor}Request${af}`];
      window.cancelAnimationFrame   = window[`${vendor}Cancel${af}`] || window[`${vendor}CancelRequest${af}`];
  }

  if(!window.requestAnimationFrame){
    window.requestAnimationFrame = function(callback) {
        const currTime    = Date.now();
        const timeToCall  = Math.max(0, 16 - (currTime - lastTime));
        const id          = window.setTimeout(() => callback(currTime + timeToCall), timeToCall);

        lastTime = currTime + timeToCall;
        return id;
    };
  }

  if(!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) { clearTimeout(id); };

}());
