export function urlPathName(){
  let route = window.location.pathname.substr(1);
  route.toLowerCase();
  let folder = route.split('/');
  let lastItem = folder[folder.length - 1];
  let routeCompotents = lastItem.split('.html');
  let currentPath = routeCompotents[0];
  return currentPath === 'index' ? '' : currentPath;
}
