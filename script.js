//function toggleMode(){
//  const html = document.documentElement
 //   html.classList.toggle("light")
// pegar a tag img
//const img = document.querySelector('#profile img')

//substituir a imagem 
 // if(html.classList.contains('light')) {
// se tiver ligh mode, add a imagem light
//img.setAttribute('src', './assets/overX.jpg')
///}   else {
// se tiver sem light mode, manter a imagem noraml
//mg.setAttribute('src', './assets/overX-amarela.jpg')
//}
//}


function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  // Verificar se o modo claro está ativado no localStorage
  if (html.classList.contains("light")) {
    // Se o modo claro estiver ativo, muda para o modo escuro
    html.classList.remove("light")
    img.setAttribute("src", "./assets/overX-amarela.jpg")
    localStorage.setItem("theme", "dark") // Salva a escolha no localStorage
  } else {
    // Se o modo escuro estiver ativo, muda para o modo claro
    html.classList.add("light")
    img.setAttribute("src", "./assets/overX.jpg")
    localStorage.setItem("theme", "light") // Salva a escolha no localStorage
  }
}

// Ao carregar a página, verifica o tema armazenado no localStorage
window.onload = function () {
  const savedTheme = localStorage.getItem("theme")
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  if (savedTheme === "light") {
    // Se o tema for claro, ativa o modo claro e altera a imagem
    html.classList.add("light")
    img.setAttribute("src", "./assets/overX.jpg")
  } else {
    // Se o tema for escuro, ativa o modo escuro e altera a imagem
    html.classList.remove("light")
    img.setAttribute("src", "./assets/overX-amarela.jpg")
  }
}

