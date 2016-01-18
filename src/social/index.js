function openSocialShareDialog(url, suffix = '', href = document.location.href){
  window.open(`${url}${href}${suffix}`, 'targetWindow', 'width=600, height=400');
}

export function attachFacebookShareDialog(element, href){
  element.addEventListener('click', e => {
    e.preventDefault();
    openSocialShareDialog('https://www.facebook.com/sharer/sharer.php?u=', '', href);
  }, false);
}

export function attachTwitterShareDialog(element, via, href){
  if(via) via = `&via=${via}`;
  element.addEventListener('click', e => {
    e.preventDefault();
    openSocialShareDialog('https://twitter.com/intent/tweet?url=', via, href);
  }, false);
}
