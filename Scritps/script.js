// Función para encriptar un texto
function encriptarTexto(texto) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
      if (char.match(/[a-z]/)) {
        let codigo = texto.charCodeAt(i);
        let encriptado = ((codigo - 97 + 1) % 26) + 97;
        resultado += String.fromCharCode(encriptado);
      } else {
        resultado += char;
      }
    }
    return resultado;
  }
  
  // Función para desencriptar un texto
  function desencriptarTexto(texto) {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      let char = texto[i];
      if (char.match(/[a-z]/)) {
        let codigo = texto.charCodeAt(i);
        let desencriptado = ((codigo - 97 - 1 + 26) % 26) + 97;
        resultado += String.fromCharCode(desencriptado);
      } else {
        resultado += char;
      }
    }
    return resultado;
  }
  
  // Obtener referencias a los elementos del DOM
  const campoTexto = document.getElementById("campo-texto");
  const botonEncriptar = document.querySelector(".Encriptar");
  const botonDesencriptar = document.querySelector(".Desencriptar");
  const mensaje = document.querySelector(".message");
  const textoInput = document.querySelector(".texto-input");
  
  // Manejadores de eventos para los botones de encriptar y desencriptar
  botonEncriptar.addEventListener("click", function() {
    const texto = campoTexto.value.toLowerCase();
    const textoEncriptado = encriptarTexto(texto);
    mensaje.textContent = "Texto encriptado:";
    textoInput.textContent = textoEncriptado;
  });
  
  botonDesencriptar.addEventListener("click", function() {
    const textoEncriptado = campoTexto.value.toLowerCase();
    const textoDesencriptado = desencriptarTexto(textoEncriptado);
    mensaje.textContent = "Texto desencriptado:";
    textoInput.textContent = textoDesencriptado;
  });
  
  
  