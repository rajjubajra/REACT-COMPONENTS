
function getUrl(){
  return window.location.href === 'http://localhost:3000' ? "http://localhost:3000" : "https://yellow-website.com/react-tailwind-compoment/themes"
}

export const baseurl =  {
  URL: getUrl(),
}