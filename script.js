const paleta = document.getElementById("paleta");
const generarBtn = document.getElementById("generar-btn");
const tamanoPaleta = document.getElementById("tamano-paleta");
const formatoColor = document.querySelectorAll('input[name="formato-color"]');
const mensajeRta = document.getElementById("mensaje-respuesta");
let tiempoMensaje;

// Array que guarda la paleta actual de colores
let paletaActual = [];

// --- FUNCIONES DE COLOR ---

function calcularHex(rojo, verde, azul) {
  return "#" + [rojo, verde, azul]
    .map(function (valor) {
      return valor.toString(16).padStart(2, "0").toUpperCase();
    })
    .join("");
}

function calcularHsl(rojo, verde, azul) {
  const rojoDecimal = rojo / 255;
  const verdeDecimal = verde / 255;
  const azulDecimal = azul / 255;
  const maximo = Math.max(rojoDecimal, verdeDecimal, azulDecimal);
  const minimo = Math.min(rojoDecimal, verdeDecimal, azulDecimal);
  const luminosidad = (maximo + minimo) / 2;
  let tono = 0;
  let saturacion = 0;

  if (maximo !== minimo) {
    const diferencia = maximo - minimo;
    saturacion = luminosidad > 0.5
      ? diferencia / (2 - maximo - minimo)
      : diferencia / (maximo + minimo);

    if (maximo === rojoDecimal) {
      tono = (verdeDecimal - azulDecimal) / diferencia + (verdeDecimal < azulDecimal ? 6 : 0);
    } else if (maximo === verdeDecimal) {
      tono = (azulDecimal - rojoDecimal) / diferencia + 2;
    } else {
      tono = (rojoDecimal - verdeDecimal) / diferencia + 4;
    }

    tono = tono / 6;
  }

  return "HSL: " +
    Math.round(tono * 360) + ", " +
    Math.round(saturacion * 100) + "%, " +
    Math.round(luminosidad * 100) + "%";
}

function obtenerCodigoColor(color) {
  const formato = document.querySelector('input[name="formato-color"]:checked').value;

  if (formato === "HEX") {
    return "HEX: " + calcularHex(color.rojo, color.verde, color.azul);
  } else {
    return calcularHsl(color.rojo, color.verde, color.azul);
  }
}

// --- FUNCIONES DE PALETA ---

function generarColores() {
  // Se limpia el array antes de generar una nueva paleta
  paletaActual = [];

  const total = Number(tamanoPaleta.value);
  const rango = 35;
  const rojoBase = Math.floor(Math.random() * 256);
  const verdeBase = Math.floor(Math.random() * 256);
  const azulBase = Math.floor(Math.random() * 256);

  for (let i = 0; i < total; i++) {
    let rojo = rojoBase;
    let verde = verdeBase;
    let azul = azulBase;

    if (i > 0) {
      rojo = Math.min(255, Math.max(0, rojoBase + Math.floor(Math.random() * (rango * 2 + 1)) - rango));
      verde = Math.min(255, Math.max(0, verdeBase + Math.floor(Math.random() * (rango * 2 + 1)) - rango));
      azul = Math.min(255, Math.max(0, azulBase + Math.floor(Math.random() * (rango * 2 + 1)) - rango));
    }

    // Cada color se guarda como un objeto dentro del array
    const color = {
      rojo: rojo,
      verde: verde,
      azul: azul,
    };

    // Se agrega el objeto al array con push()
    paletaActual.push(color);
  }
}

function renderizarPaleta() {
  // Se eliminan las tarjetas anteriores del DOM
  const tarjetasViejas = document.querySelectorAll(".color-card");
  for (let i = 0; i < tarjetasViejas.length; i++) {
    tarjetasViejas[i].remove();
  }

  // Se recorre el array paletaActual para crear una tarjeta por cada color
  for (let i = 0; i < paletaActual.length; i++) {
    const color = paletaActual[i];

    const tarjeta = document.createElement("div");
    const textoColor = document.createElement("span");

    tarjeta.className = "color-card";
    textoColor.className = "valor-color";
    tarjeta.style.backgroundColor = "rgb(" + color.rojo + ", " + color.verde + ", " + color.azul + ")";
    textoColor.textContent = obtenerCodigoColor(color);
    tarjeta.appendChild(textoColor);

    // Al hacer clic se copia el código al portapapeles
    tarjeta.addEventListener("click", function () {
      const colorSeleccionado = textoColor.textContent;

      navigator.clipboard.writeText(colorSeleccionado)
        .then(function () {
          mostrarMensaje("Su color ha sido copiado con exito");
        })
        .catch(function () {
          mostrarMensaje("No se pudo copiar el color");
        });
    });

    paleta.appendChild(tarjeta);
  }
}

function actualizarFormato() {
  // Se recorren todas las tarjetas del DOM y se actualiza el texto del color
  const tarjetas = document.querySelectorAll(".color-card");

  for (let i = 0; i < tarjetas.length; i++) {
    const textoColor = tarjetas[i].querySelector(".valor-color");
    // Se usa el array paletaActual para obtener los valores RGB del color
    textoColor.textContent = obtenerCodigoColor(paletaActual[i]);
  }
}

function crearPaleta() {
  generarColores();      // 1. Genera los colores y los guarda en el array
  renderizarPaleta();    // 2. Dibuja las tarjetas en pantalla desde el array
  mostrarMensaje("Haz generado una nueva paleta de " + tamanoPaleta.value + " colores");
}

// --- FUNCIÓN DE MICROFEEDBACK ---

function mostrarMensaje(texto) {
  mensajeRta.textContent = texto;
  mensajeRta.classList.add("mensaje-activo");
  clearTimeout(tiempoMensaje);
  tiempoMensaje = setTimeout(function () {
    mensajeRta.textContent = "";
    mensajeRta.classList.remove("mensaje-activo");
  }, 2000);
}

// --- EVENTOS ---

generarBtn.addEventListener("click", crearPaleta);

for (let i = 0; i < formatoColor.length; i++) {
  formatoColor[i].addEventListener("change", function () {
    actualizarFormato();
    mostrarMensaje("Los colores se mostrarán en formato " + formatoColor[i].value);
  });
}

// Se genera una paleta inicial al cargar la página
crearPaleta();
