function toggleMode(){
  const html = document.documentElement
    html.classList.toggle("light")
// pegar a tag img
const img = document.querySelector('#profile img')

//substituir a imagem 
  if(html.classList.contains('light')) {
// se tiver ligh mode, add a imagem light
img.setAttribute('src', './assets/overX.jpg')
}   else {
// se tiver sem light mode, manter a imagem noraml
img.setAttribute('src', './assets/overX-amarela.jpg')
}



}