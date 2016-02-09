export function xhr(src, method = 'GET', parse = true){
  return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.addEventListener('load', () => {
            const {status, responseText} = xhr;
            if(status === 200 || status === 304)
              resolve(parse ? JSON.parse(responseText) : responseText);
            else
              reject('load_error');
        }, false);

        xhr.open(method, src, true);
        xhr.send();
    });
}

export function scriptLoader(src){
    return new Promise((resolve, reject) => {
        let script  = document.createElement('script');
        script.type = 'text/javascript';
        script.src  = src;
        if(script.addEventListener) {
           script.addEventListener('load', resolve, 0);
        }else{
            reject();
        }

        document.body.appendChild(script);
    });
}
