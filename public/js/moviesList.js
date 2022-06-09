let darkMode = prompt("¿Desea modo oscuro?");

if (darkMode) {
  document.querySelector("body").style.backgroundColor = "#7f7f7f";
  document.querySelector("body").classList.add("fondoMoviesList");
}

let h1 = document.querySelector("h1");
h1.innerHTML = 'LISTADO DE PELICULAS'
h1.style.color = 'white'
h1.style.backgroundColor = 'teal'
h1.style.padding = "20px"