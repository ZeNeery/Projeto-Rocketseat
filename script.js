function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  // Pegar a Tag da img
  const img = document.querySelector("#profile img")

  // Substituir a Imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
  }
}
