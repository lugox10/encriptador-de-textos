function ocultar_texto() {
    document.getElementById("ocultar_imagen").style.display = "none";
    document.getElementById("ocultar_h2").style.display = "none";
}

function mostrarBoton() {
    document.getElementById("boton_oculto").style.display = "block";
}

function encriptar() {
    ocultar_texto();

    let texto = document.getElementById("texto").value.toLowerCase();
    let nuevo_texto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("cambio_texto").innerHTML = nuevo_texto;
    document.getElementById("cambio_texto").style.fontSize = "1.5rem";
    document.getElementById("cambio_texto").style.textAlign = "justify";

    mostrarBoton();
}

function desencriptar() {
    ocultar_texto();
    
    let texto = document.getElementById("texto").value.toLowerCase();
    let nuevo_texto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("cambio_texto").innerHTML = nuevo_texto;
    document.getElementById("cambio_texto").style.fontSize = "1.5rem";
    document.getElementById("cambio_texto").style.textAlign = "justify";

    mostrarBoton();
}

function copiar() {
    let copiar = document.getElementById("cambio_texto").innerHTML;

    navigator.clipboard.writeText(copiar);
}
