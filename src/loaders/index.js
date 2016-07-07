export const HTTP = {
  get   :'GET',
  post  :'POST',
  put   :'PUT',
  delete:'DELETE'
}

export function xhr(src, params = {}, method = HTTP.get, headers){
  return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.addEventListener('load', () => {
            const { status, responseText } = xhr
            if(status === 200 || status === 304)
              resolve(responseText)
            else
              reject('load_error')
        }, false)

        xhr.open(method, src, true)

        for(let header of headers)
          xhr.setRequestHeader(...header)

        xhr.send(JSON.stringify(params))
    })
}

export function scriptLoader(src){
    return new Promise((resolve, reject) => {
        let script  = document.createElement('script')
        script.type = 'text/javascript'
        script.src  = src
        if(script.addEventListener) {
           script.addEventListener('load', resolve, 0)
        }else{
            reject()
        }

        document.body.appendChild(script)
    })
}
