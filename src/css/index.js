export const supportsCSS = !!(window.CSS && window.CSS.supports)

export function checkCSS(property, cssTest){
   console.warn('BAKU: checkCSS method only available in modern browsers')
   return supportsCSS && CSS.supports(property, cssTest)
}
