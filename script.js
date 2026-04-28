const paleta = document.getElementById("paleta");
const generarBtn = document.getElementById("generar-btn");
const tamanoPaleta = document.getElementById("tamano-paleta");
const formatoColor = document.querySelectorAll('input[name="formato-color"]');
const mensajeRta = document.getElementById("mensaje-respuesta");
let tiempoMensaje;

function mostrarValorColor(tarjeta) {
  const formato = document.querySelector('input[name="formato-color"]:checked').value;
  const rojo = Number(tarjeta.dataset.rojo);
  const verde = Number(tarjeta.dataset.verde);
  const azul = Number(tarjeta.dataset.azul);
  const textoColor = tarjeta.querySelector(".valor-color");

  if (formato === "HEX") {
    const hex = "#" + [rojo, verde, azul]
      .map(function (valor) {
        return valor.toString(16).padStart(2, "0").toUpperCase();
      })
      .join("");

    textoColor.textContent = "HEX: " + hex;

  } else {
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

    textoColor.textContent = "HSL: " +
      Math.round(tono * 360) + ", " +
      Math.round(saturacion * 100) + "%, " +
      Math.round(luminosidad * 100) + "%";

  }
}

function crearPaleta() {
  const tarjetas = document.querySelectorAll(".color-card");

  for (let i = 0; i < tarjetas.length; i++) {
    tarjetas[i].remove();
  }

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

    const tarjeta = document.createElement("div");
    const textoColor = document.createElement("span");

    tarjeta.className = "color-card";
    textoColor.className = "valor-color";
    tarjeta.style.backgroundColor = "rgb(" + rojo + ", " + verde + ", " + azul + ")";
    tarjeta.dataset.rojo = rojo;
    tarjeta.dataset.verde = verde;
    tarjeta.dataset.azul = azul;
    tarjeta.appendChild(textoColor);

    mostrarValorColor(tarjeta);

    tarjeta.addEventListener("click", function () {
      const colorSeleccionado = textoColor.textContent;

      navigator.clipboard.writeText(colorSeleccionado)
        .then(function () {
          mensajeRta.textContent = "Su color ha sido copiado con exito";
          mensajeRta.classList.add("mensaje-activo");
          clearTimeout(tiempoMensaje);
          tiempoMensaje = setTimeout(function () {
            mensajeRta.textContent = "";
            mensajeRta.classList.remove("mensaje-activo");
          }, 2000);
        })
        .catch(function () {
          mensajeRta.textContent = "No se pudo copiar el color";
          mensajeRta.classList.add("mensaje-activo");
          clearTimeout(tiempoMensaje);
          tiempoMensaje = setTimeout(function () {
            mensajeRta.textContent = "";
            mensajeRta.classList.remove("mensaje-activo");
          }, 2000);
        });
    });

    paleta.appendChild(tarjeta);
  }


  mensajeRta.textContent = "Haz generado una nueva paleta de " + tamanoPaleta.value + " colores";
  mensajeRta.classList.add("mensaje-activo");
  clearTimeout(tiempoMensaje);
  tiempoMensaje = setTimeout(function () {
  mensajeRta.textContent = "";
  mensajeRta.classList.remove("mensaje-activo");
  }, 2000);

}

generarBtn.addEventListener("click", crearPaleta);
  for (let i = 0; i < formatoColor.length; i++) {
  formatoColor[i].addEventListener("change", function () {
    const tarjetas = document.querySelectorAll(".color-card");

    for (let j = 0; j < tarjetas.length; j++) {
      mostrarValorColor(tarjetas[j]);
    }
  });
}
crearPaleta();

formatoColor.forEach(function (radio) {
  radio.addEventListener("click", function () {
    mensajeRta.textContent = "Los colores se mostrarán en formato " + radio.value;
    mensajeRta.classList.add("mensaje-activo");
    clearTimeout(tiempoMensaje);
    tiempoMensaje = setTimeout(function () {
      mensajeRta.textContent = "";
      mensajeRta.classList.remove("mensaje-activo");
    }, 2000);
  });
});



