let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

//Funcion que apica las animaciones de las habilades
function efectoHabilidades() {
  let skills = document.getElementById("skills");
  let distancia_skills = (window.innerHeight =
    skills.getBoundingClientRect().top);
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("react");
    habilidades[3].classList.add("tailwind");
    habilidades[4].classList.add("sequelize");
    habilidades[5].classList.add("express");
    habilidades[6].classList.add("nodejs");
    habilidades[7].classList.add("postgressql");
    habilidades[8].classList.add("pyhton");
    habilidades[8].classList.add("trabajo");
    habilidades[8].classList.add("creatividad");
    habilidades[8].classList.add("comunicacion");
    habilidades[8].classList.add("dedicacion");
    habilidades[8].classList.add("analisis");
    habilidades[8].classList.add("estrategia");
    habilidades[8].classList.add("proyectos");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades

window.onscroll = function () {
  efectoHabilidades();
};
