let main = document.querySelector("main");
let h2 = document.querySelector("h2");
let a = document.querySelector("a");
let p = document.querySelectorAll("p");

let user = prompt("Ingrese su nombre");

if (!user) {
  h2.innerHTML = "Invitado";
} else {
  h2.innerHTML = user;
}

h2.style.textTransform = "uppercase";
a.style.color = "#E51B3E";

let backg = confirm("¿Desea colocar un fondo de pantalla?");

if (backg) {
  document.querySelector("body").classList.add("fondo");
}

for (let i = 0; i < p.length; i++) {
  if ((i+1) % 2 == 1) {
    p[i].classList.add("destacadoImpar");
  } else {
    p[i].classList.add("destacadoPar");
  }
}

main.style.display = 'block'
