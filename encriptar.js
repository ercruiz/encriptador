// Las "llaves" de encriptación que utilizaremos son las siguientes:
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var imgSearch = document.querySelector(".conteiner-search");
var containerMessage1 = document.querySelector(".container-message1");
var containerMessage2 = document.querySelector(".container-message2");
var resultMessage = document.querySelector(".txtMessage");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar() {
  ocultar();
  var textArea = textoEncriptar();
  resultMessage.textContent = encriptarText(textArea);
}

function desencriptar() {
  ocultar();
  var textArea = textoEncriptar();
  resultMessage.textContent = desencriptarText(textArea);
}

function textoEncriptar() {
  var textoArea = document.querySelector(".text-area");
  return textoArea.value;
}

function ocultar() {
  imgSearch.classList.add("btn-hide");
  containerMessage1.classList.add("btn-hide");
  containerMessage2.classList.add("btn-hide");
}

function encriptarText(message) {
  var inputText = message;
  var outputText = "";

  for (var i = 0; i < inputText.length; i++) {
    if (inputText[i] == "e") {
      outputText += "enter";
    } else if (inputText[i] == "i") {
      outputText += "imes";
    } else if (inputText[i] == "a") {
      outputText += "ai";
    } else if (inputText[i] == "o") {
      outputText += "ober";
    } else if (inputText[i] == "u") {
      outputText += "ufat";
    } else {
      outputText += inputText[i];
    }
  }

  return outputText.toLowerCase();
}

function desencriptarText(message) {
  var inputText = message;
  var outputText = "";

  for (var i = 0; i < inputText.length; i++) {
    if (inputText[i] == "e") {
      outputText += "e";
      i += 4;
    } else if (inputText[i] == "i") {
      outputText += "i";
      i += 3;
    } else if (inputText[i] == "a") {
      outputText += "a";
      i = i + 1;
    } else if (inputText[i] == "o") {
      outputText += "o";
      i += 3;
    } else if (inputText[i] == "u") {
      outputText += "u";
      i += 3;
    } else {
      outputText += inputText[i];
    }
  }

  return outputText.toLowerCase();
}

function copiarMensaje() {
  var copyText = document.getElementById("txtMessage");
  copyText.select();
  document.execCommand("copy");
}
