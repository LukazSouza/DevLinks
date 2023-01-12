function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar atag img
  const img = document.querySelector("#profile img")

  //Substituir a imagem
  if (html.classList.contains("light")) {
    // Setiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/92232843?v=4"
    )
  }
  if (html.classList.contains("light")) {
    // Setiver light mode, adicionar a imagem light
    img.setAttribute("alt", "Outra foto de sol")
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("alt", "Foto de Lucas souza sério e de boné")
  }
}
