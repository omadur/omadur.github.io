let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");
let miImage = document.querySelector("img");

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial, " + nombreAlmacenado;
}


miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === "images/logo-firefox.png") {
        miImage.setAttribute('src', 'images/logo-firefox2.png');
    } else {
        miImage.setAttribute('src', 'images/logo-firefox.png');
    }
};



function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Mozilla es genial, " + miNombre;
    }

}

miBoton.onclick = function () {
    estableceNombreUsuario();
};