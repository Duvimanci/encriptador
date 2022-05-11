const inputTexto = document.querySelector(".ingreso");
const mensaje = document.querySelector(".muestra");

const inputCopia = document.querySelector(".muestra");
const mensajeCopiado = document.querySelector(".ingreso");

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    var objmuñeco = document.getElementById("muñeco");
    objmuñeco.style.display = "none";
    var objtextolateral = document.getElementById("texto-lateral");
    objtextolateral.style.display = "none";
    var objbotonCop = document.getElementById("botonCop");
    objbotonCop.style.display = "flex";
}

function encriptar(StringParaEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
    
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    var objmuñeco = document.getElementById("muñeco");
    objmuñeco.style.display = "none";
    var objtextolateral = document.getElementById("texto-lateral");
    objtextolateral.style.display = "none";
    var objbotonCop = document.getElementById("botonCop");
    objbotonCop.style.display = "flex";
}

function desencriptar(StringParaDesencriptar) {
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    StringParaDesencriptar = StringParaDesencriptar.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (StringParaDesencriptar.includes(matrizCodigo[i][0])) {
            StringParaDesencriptar = StringParaDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return StringParaDesencriptar;
}

function btnCopiar() {
    mensajeCopiado.value = inputCopia.value;
    alert("El texto encriptado fue copiado")
}
