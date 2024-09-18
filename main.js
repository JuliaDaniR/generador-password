let cantidad = document.querySelector("#cantidad");
let boton = document.getElementById("generar");
let botonLimpiar = document.getElementById("limpiar");
let resultado = document.getElementById("contrasena");
let verificarSeguridad = document.getElementById("validador");
let barraEstado = document.getElementById("barra-estado");
let barraCargada = document.getElementById("barra-cargada");
let contador = 0;

const cadenaDeCaracteres =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

function generar() {
  let numeroDigitado = parseInt(cantidad.value);
  let password = "";

  if (numeroDigitado < 6 || numeroDigitado > 15) {
    alert("La cantidad de caracteres tiene que ser mayor que 6 y menor que 16");
  }else if(isNaN(numeroDigitado)){
    alert("Debe digitar un número");
  } else {
    for (let i = 0; i < numeroDigitado; i++) {
      let caracterAleatorio =
        cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];
      password += caracterAleatorio;
    }
    resultado.value = password;
    verificarSeguridadPassword(password);
  }
}

function limpiar() {
  cantidad.value = "";
  resultado.value = "";
  isFuerte = false;
  isDebil = false;
  isMedia = false;
  verificarSeguridad.innerText = "";
  barraCargada.style.width = "0%";
  barraCargada.style.backgroundColor =
    "transparent";
    contador = 0;
}

function verificarSeguridadPassword(clave) {
  let isFuerte = false;
  let isMedia = false;
  let isDebil = false;

  const longitudMinima = 8;
  const tieneMayuscula = /[A-Z]/.test(clave);
  const tieneMinuscula = /[a-z]/.test(clave);
  const tieneNumero = /[0-9]/.test(clave);
  const tieneCaracterEspecial = /[!@#$%^&*()]/.test(clave);

  if (tieneMayuscula) contador++;
  if (tieneMinuscula) contador++;
  if (tieneNumero) contador++;
  if (tieneCaracterEspecial) contador++;

  if(contador === 4 && clave.length > longitudMinima){
    isFuerte = true;
  }else if(contador === 3 && (clave.length >= longitudMinima)){
    isMedia = true;
  }else{
    isDebil = true;
  }

  if (isFuerte) {
    verificarSeguridad.innerText = "Password Fuerte";
    verificarSeguridad.style.color = "green";
    barraCargada.style.width = "100%";
    barraCargada.style.backgroundColor = "green";
  } else if (isMedia) {
    verificarSeguridad.innerText = "Password Medio";
    verificarSeguridad.style.color = "orange";
    barraCargada.style.width = "60%";
    barraCargada.style.backgroundColor = "orange";
  } else if (isDebil) {
    verificarSeguridad.innerText = "Password Débil";
    verificarSeguridad.style.color = "red";
    barraCargada.style.width = "30%";
    barraCargada.style.backgroundColor = "red";
  }
  contador = 0;
}

