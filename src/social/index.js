function openSocialShareDialog(url, suffix = '', href = document.location.href){
  window.open(`${url}${href}${suffix}`, 'targetWindow', 'width=600, height=400');
}

export function attachFacebookShareDialog(element){
  element.addEventListener('click', () => openSocialShareDialog('https://www.facebook.com/sharer/sharer.php?u='), false);
}

export function attachTwitterShareDialog(element, via){
  via = `&via=${via}`;
  element.addEventListener('click', () => openSocialShareDialog('https://twitter.com/intent/tweet?url=', via), false);
}
