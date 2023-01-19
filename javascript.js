const textTarea = document.querySelector('.text__tarea');
const btnEncriptar = document.querySelector('.btn__encriptador');
const btnDesencriptar = document.querySelector('.btn__desencriptador');
const mensaje = document.querySelector('.mensaje');
const btnCopiar = document.querySelector('.copiar');

const errorImg = document.querySelector('.error');
const errorTexto = document.querySelector('h3');
const errorPrompt = document.querySelector('p');


btnEncriptar.addEventListener('click', () => {
    if (textTarea.value === '') {
      errorImg.style.display = 'block';
      errorTexto.style.display = 'block';
      errorPrompt.style.display = 'block';
      mensaje.style.display = 'none';
      btnCopiar.style.display = 'none';
    } else {
      errorImg.style.display = 'none';
      errorTexto.style.display = 'none';
      errorPrompt.style.display = 'none';
      mensaje.style.display = 'block';
      btnCopiar.style.display = 'flex';
    }
});

btnEncriptar.addEventListener('click', function(){
  let entradaTexto = textTarea.value;
  let salidaTexto = encriptar(entradaTexto);
  mensaje.value = salidaTexto;
});

btnDesencriptar.addEventListener('click', function(){
  let entradaTexto = textTarea.value;
  let salidaTexto = desencriptar(entradaTexto);
  mensaje.value = salidaTexto;
});

btnCopiar.addEventListener('click', function(){
  mensaje.select();
  document.execCommand("copy");
});

function encriptar(texto){
  let textoEncriptado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  return textoEncriptado;
}

function desencriptar(texto){
  let textoDesencriptado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  return textoDesencriptado;
}

btnEncriptar.addEventListener('click', function(){
    let entradaTexto = textTarea.value;
    if(!validate(entradaTexto)){
      document.getElementById("alert").style.display = "block";
      document.querySelector("main").classList.add("blur");
      document.querySelector("header").classList.add("blur");
    }else{
      document.getElementById("alert").style.display = "none";
      document.querySelector("main").classList.add("none");
      document.querySelector("header").classList.add("none");
      let salidaTexto = encriptar(entradaTexto);
      mensaje.value = salidaTexto;
    }
  });
  
  btnDesencriptar.addEventListener('click', function(){
    let entradaTexto = textTarea.value;
    if(!validate(entradaTexto)){
      document.getElementById("alert").style.display = "block";
      document.querySelector("main").classList.add("blur");
      document.querySelector("header").classList.add("blur");
    }else{
      document.getElementById("alert").style.display = "none";
      document.querySelector("main").classList.add("none");
      document.querySelector("header").classList.add("none");
      let salidaTexto = desencriptar(entradaTexto);
      mensaje.value = salidaTexto;
    }
  });
  
  document.querySelector("body").addEventListener("click", function(event){
    if(!document.querySelector("main").contains(event.target)){
      document.getElementById("alert").style.display = "none";
      document.querySelector("main").classList.remove("blur");
      document.querySelector("header").classList.remove("blur");
    }
  });
  

  function validate(texto){
    let patron = /[^a-z ]/;
    return !patron.test(texto);
  }
  
  
 
  
  
  
  