const palabras = [
  ["computadora", "Dispositivo electrónico utilizado para procesar información."], 
  ["informatica", "Ciencia que estudia el tratamiento automático de la información."], 
  ["cargador", "Dispositivo que se utiliza para recargar la batería de otros dispositivos."], 
  ["javascript", "Lenguaje de programación utilizado principalmente para crear contenido web interactivo."],
  ["pizarron", "Superficie en la que se puede escribir o dibujar, generalmente con tiza o marcadores."], 
  ["monitor", "Dispositivo de salida que muestra información gráfica generada por una computadora."], 
  ["reloj", "Instrumento para medir el tiempo que generalmente se lleva en la muñeca."],
  ["motor", "Máquina que convierte energía en movimiento mecánico."], 
  ["arreglo", "Estructura de datos que contiene una colección de elementos del mismo tipo."],
  ["frameworks", "Colección de herramientas y componentes predefinidos que facilitan el desarrollo de software."], 
  ["formato", "Estructura o disposición de algo, especialmente cuando se trata de texto o datos."], 
  ["auriculares", "Dispositivo que se utiliza para conectar múltiples dispositivos a una red de datos."],
  ["switch", "Dispositivo de red que conecta diferentes segmentos de red y filtra el tráfico de datos."], 
  ["protocolos", "Conjunto de reglas y convenciones que permiten la comunicación entre dispositivos en una red."],
  ["internet", "Red global de computadoras interconectadas que utilizan el Protocolo de Internet para comunicarse."], 
  ["constante", "Valor fijo que no cambia en una expresión matemática o un programa de computadora."], 
  ["desarrollar", "Crear y mejorar un programa de computadora escribiendo y probando código."],
  ["automatizar", "Hacer que un proceso o tarea se realice automáticamente, sin intervención humana directa."], 
  ["licenciatura", "Grado académico otorgado por una institución educativa después de completar un programa de estudios en ingeniería."], 
  ["consola", "Dispositivo de entrada y salida que se utiliza para interactuar con una computadora mediante comandos."],
];


let palabra = "";
let oculta = [];
let hueco = document.getElementById("palabra");
let contador = 15;
let buttons = document.getElementsByClassName("letra");
let btnInicio = document.getElementById("reset");
let palabraIndex;

// ### FUNCIONES ###

// Función para generar la palabra
function generaPalabra() {
  palabraIndex = Math.floor(Math.random() * palabras.length);
  palabra = palabras[palabraIndex][0].toUpperCase();
  document.getElementById("hueco-pista").innerHTML = ""; 
  console.log(palabra);
}


// Función para obtener la pista correspondiente a la palabra seleccionada
function pista() {
  document.getElementById("hueco-pista").innerHTML = palabras[palabraIndex][1]; // Usar el índice guardado para obtener la pista
}

// Funcion para pintar los guiones de la palabra
function pintarGuiones(num) {
  for (let i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerHTML = oculta.join("");
}

//Generar abecedario
function teclado () {
  document.getElementById("abcdario").innerHTML = "";
  let inicio = "a";
  let fin = "z";
  let i = inicio.charCodeAt(0), j = fin.charCodeAt(0);
  let letra = "";
  for( ; i<=j; i++) {
      letra = String.fromCharCode(i).toUpperCase();
      document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
      if(i==110) {
          document.getElementById("abcdario").innerHTML += "<button value='Ñ' onclick='intento(\"Ñ\")' class='letra' id='"+letra+"'>Ñ</button>";
      }
  }
}

// Chequear intento
function intento(letra) {
  document.getElementById(letra).disabled = true;
  if (palabra.includes(letra)) {
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "Bien!";
    document.getElementById("acierto").className += "acierto verde";
  } else {
    contador--;
    document.getElementById("intentos").innerHTML = contador;
    document.getElementById("acierto").innerHTML = "Fallo!";
    document.getElementById("acierto").className += "acierto rojo";
    if (contador == 10 || contador == 5 || contador == 0) {
      document.getElementById("image" + contador).className += "fade-in";
    }
  }
  compruebaFin();
  setTimeout(function () { 
    document.getElementById("acierto").className = ""; 
  }, 800);
}

// Compruba si ha finalizado
function compruebaFin() {
  if (oculta.indexOf("_") === -1) {
    document.getElementById("msg-final").innerHTML = "Felicidades !!";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function() { location.reload() };
  } else if (contador <= 0) { 
    contador = 0;
    document.getElementById("msg-final").innerHTML = "Game Over";
    document.getElementById("msg-final").className += "zoom-in";
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload() };
  }
}

// Restablecer juego
function inicio() {
  generaPalabra();
  pintarGuiones(palabra.length);
  teclado();
  contador = 15;
  document.getElementById("intentos").innerHTML = contador;
}

// Iniciar
window.onload = inicio();
