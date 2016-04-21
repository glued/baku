function openSocialShareDialog(url, path = '', suffix = '', href = document.location.href){
  window.open(`${url}${href}${path}${suffix}`, 'targetWindow', 'width=600, height=400')
}

export function attachFbShareDialog(element){
  if(!element) return
  element.addEventListener('click', e => {
    e.preventDefault()
    let path = e.currentTarget.getAttribute('href')
    openSocialShareDialog('https://www.facebook.com/sharer/sharer.php?u=', path)
  }, false)
}

export function attachTwShareDialog(element, author){
  if(!element) return
  let suffix = `&via=${author}`
  element.addEventListener('click', e => {
    e.preventDefault()
    let path = e.currentTarget.getAttribute('href')
    openSocialShareDialog('https://twitter.com/intent/tweet?url=', path, suffix)
  }, false)
}
