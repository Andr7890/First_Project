function toggleMode() {
  const html = document.documentElement

  html.classList.toggle('light')

  //pegar tad img
  const img = document.querySelector('#profile img')
  //substituir a imagem
  if(html.classList.contains('light')){
    //se tiver imagem light add a imagem light
    img.setAttribute("src", "./assets/blue-pen-light.png")
  } else{
    //se não tiver imagem light add imagem normal
    img.setAttribute("src", "./assets/blue-pen.png")
  }

}