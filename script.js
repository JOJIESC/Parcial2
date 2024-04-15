const palabras = [
    ["computadora", "UAQ"], 
    ["informatica", "automatas"], 
    ["cargador", "USB"], 
    ["ahorcado", "javascript"],
    ["pizarron", "teclado"], 
    ["monitor", "mouse"], 
    ["reloj", "adivinar"],
    ["motor", "categoria"], 
    ["arreglo", "variables"],
    ["frameworks", "imagenes"], 
    ["formato", "escribir"], 
    ["auriculares", "router"],
    ["switch", "enrutar"], 
    ["protocolos", "redes"],
    ["internet", "cyberseguridad"], 
    ["constante", "algebra"], 
    ["desarrollar", "programar"],
    ["automatizar", "estados"], 
    ["licenciatura", "ingenieria"], 
    ["consola", "RGB"]
];
let palabra = "";

let aleatorio;

let oculta = [];

let hueco = document.getElementById("palabra");

let contador = 15;

let buttons = document.getElementById("letra")

function generaPalabra() {
    aleatorio = (Math.random() * 20).toFixed(0);
    palabra = palabras[aleatorio];
    console.log(palabra);
}

function guiones(numero) {
    for (let i = 0; i < numero; i++){
        oculta[i] = "_";
    }
    hueco.innerHTML = oculta.join("")
}

function teclado () {
    document.getElementById("abcdario").innerHTML = "";
    inicio = "a";
    fin = "z"
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

  function inicio() {
    generaPalabra();
    guiones(palabra.length);
    teclado();
    cont = 6;
    document.getElementById("intentos").innerHTML=cont;
  }
  
  window.onload = inicio();


