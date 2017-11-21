/*
 * Funcionalidad de tu producto
 */
 //Menú desplegable de sección "teachers"

  var boton = document.getElementById('btn'); //llama al elemento btn y lo guarda en la var boton

  function showMenu() { //funcion para mostrar y ocultar el submenu
    var subMenu = document.getElementById('opcs-menu');

    if(subMenu.classList.contains("disabled-menu")){
      subMenu.classList.remove("disabled-menu");
      subMenu.classList.add("enabled-menu");
    }
    else{
      subMenu.classList.remove("enabled-menu");
      subMenu.classList.add("disabled-menu");
    }
  }

  boton.addEventListener("click", showMenu);



// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
