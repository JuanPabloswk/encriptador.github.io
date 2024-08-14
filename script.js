
const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".salidaTexto");
const color = document.querySelector(".color");
const color1 = document.querySelector(".color1");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
    color.style.color = "white"
    color1.style.color = "white"
}

function btnDesencriptar() {

    
    if (textArea.value == "") {
        const textoDesencriptado = desencriptar(mensaje.value)
        textArea.value = textoDesencriptado
        mensaje.value = "";
        mensaje.style.backgroundImage = "url('./img/candado.png')"
        color.style.color = "black"
        color1.style.color = "black"
    }
    else {
        const textoDesencriptado = desencriptar(textArea.value)
        mensaje.value = textoDesencriptado
        textArea.value = "";
    }
    
}
    
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){ 
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function copiar() {
    const textoCopiado = mensaje.value
    navigator.clipboard.writeText(textoCopiado)
    .then(() => {
        // Notificación de éxito
        alert("Texto copiado al portapapeles: " + textoCopiado);
    })
    .catch(err => {
        // Manejo de errores
        console.error("Error al copiar el texto: ", err);
    });
}

