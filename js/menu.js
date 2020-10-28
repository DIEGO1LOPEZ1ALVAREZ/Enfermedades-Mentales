// Cuando se desplaza la ventana hacía arriba o abajo, se ejecuta una función.
window.onscroll = () => {
    // Consigué el menú.
    var nvMenu = document.getElementById("nv-menu");

    // Si el desplazamiento del eje Y de la ventana es mayor a la del menú (40), agrega la propiedad que hace que se pegue, si no, se la quita.
    if (window.pageYOffset >= 40) {
        nvMenu.classList.add("menu-sticky");
    }
    else {
        nvMenu.classList.remove("menu-sticky");
        nvMenu.offsetTop = 40;
    }
} 