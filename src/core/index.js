export function getElem(str, query = false){
  if(query)
    return document.querySelector(str);
  else
    return document.getElementById(str);
}

export function createElem(elem, className){
  let element = document.createElement(elem);
  if(className) element.className = className;
  return element;
}

export function findParentLI(target, count = 0){
    if(count > 5) return false; // MAX
    if(target instanceof HTMLLIElement) return target;
    if(!target.parentNode) return false;
    count++;
    return findParentLI(target.parentNode, count);
}//AWW YISS RECURSION
