function desencriptar() {
  var texto = document.getElementById("input-text");
  //   g afecta toda la línea u oración
  //   i afecta a mayusculas y minusculas
  //   m afecta a múltiples línea u oraciones
  var textoEncriptado = texto.replace(/enter/gim, "e");
  var textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
  var textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
  var textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");

  document.getElementById("search-img").style.display = "none";
  document.getElementById("message").style.display = "none";
  document.getElementById("message2").innerHTML = textoEncriptado;
  document.getElementById("btn-copy").style.display = "show";
  document.getElementById("btn-copy").style.display = "inherit";
}
