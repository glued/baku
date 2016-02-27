function openSocialShareDialog(url, suffix = '', href = document.location.href){
  window.open(`${url}${href}${suffix}`, 'targetWindow', 'width=600, height=400')
}

export function attachFbShareDialog(element){
  if(!element) return
  element.addEventListener('click', e => {
    e.preventDefault()
    openSocialShareDialog('https://www.facebook.com/sharer/sharer.php?u=')
  }, false)
}

export function attachTwShareDialog(element, via){
  if(!element) return
  via = `&via=${via}`
  element.addEventListener('click', e => {
    e.preventDefault()
    openSocialShareDialog('https://twitter.com/intent/tweet?url=', via)
  }, false)
}
