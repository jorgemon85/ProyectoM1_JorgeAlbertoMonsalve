# 🎨 ColorFly Studio — Generador de Paletas Interactivo

Aplicación web estática e interactiva que permite generar paletas de colores aleatorias de forma rápida e intuitiva. Desarrollada como Proyecto Integrador del Módulo 1 del curso Full Stack en [Soy Henry](https://www.soyhenry.com/).

🌐 **Demo en vivo:** [https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/](https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/)

---

## 📋 Descripción

ColorFly Studio es una herramienta web diseñada para la agencia de branding ficticia **Colorfly Studio**, que necesitaba acelerar su flujo creativo al generar propuestas visuales para sus clientes. La aplicación permite generar paletas de colores aleatorias con un único botón, visualizar cada color con su código y copiarlo al portapapeles con un solo clic.

---

## ✨ Funcionalidades

- **Generación de paletas aleatorias** con un botón principal
- **Selección del tamaño de paleta:** 6, 8 o 9 colores
- **Dos formatos de color disponibles:** HEX y HSL
- **Cambio de formato en tiempo real** sin necesidad de regenerar la paleta
- **Copia al portapapeles** al hacer clic sobre cualquier tarjeta de color
- **Microfeedback visual (toast):** mensajes de confirmación animados para cada acción
- **Paletas con coherencia cromática:** colores generados con variaciones controladas

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de la aplicación |
| CSS3 | Estilos, layout con Flexbox, diseño visual |
| JavaScript (Vanilla) | Lógica de generación, manipulación del DOM, eventos |
| Git | Control de versiones |
| GitHub | Repositorio y portafolio |
| GitHub Pages | Despliegue de la aplicación |

---

## 📁 Estructura del proyecto

```
ProyectoM1_JorgeAlbertoMonsalve/
├── index.html
├── styles.css
├── fonts.css
├── script.js
├── Fonts/
│   ├── FredokaOne-Regular.otf
│   ├── Galindo-Regular.ttf
│   └── Roboto-Regular.ttf
└── Img/
    └── Fondo.jpg
```

---

## 💻 Fragmentos de código explicados

### 1. Generación de colores con coherencia cromática

En lugar de generar colores totalmente aleatorios, se define una base RGB aleatoria y cada color adicional varía como máximo ±35 en cada canal. Esto garantiza que los colores de la paleta sean visualmente armónicos entre sí.

```javascript
const rango = 35;
const rojoBase = Math.floor(Math.random() * 256);
const verdeBase = Math.floor(Math.random() * 256);
const azulBase = Math.floor(Math.random() * 256);

// Para cada color adicional, se varía la base dentro del rango
rojo = Math.min(255, Math.max(0, rojoBase + Math.floor(Math.random() * (rango * 2 + 1)) - rango));
```

- `Math.random() * 256` genera un valor base aleatorio entre 0 y 255.
- `Math.min(255, Math.max(0, ...))` asegura que el resultado nunca salga del rango válido de un color RGB.
- El `rango * 2 + 1` define una ventana de variación de 71 valores posibles alrededor de la base.

---

### 2. Conversión de RGB a HSL

La conversión al formato HSL se implementó manualmente aplicando la fórmula matemática estándar, sin librerías externas.

```javascript
const rojoDecimal = rojo / 255;
const verdeDecimal = verde / 255;
const azulDecimal = azul / 255;

const maximo = Math.max(rojoDecimal, verdeDecimal, azulDecimal);
const minimo = Math.min(rojoDecimal, verdeDecimal, azulDecimal);
const luminosidad = (maximo + minimo) / 2;

if (maximo !== minimo) {
  const diferencia = maximo - minimo;
  saturacion = luminosidad > 0.5
    ? diferencia / (2 - maximo - minimo)
    : diferencia / (maximo + minimo);
}
```

- Los valores RGB se normalizan dividiéndolos entre 255 para trabajar en el rango [0, 1].
- La **luminosidad** es el promedio entre el canal más alto y el más bajo.
- La **saturación** se calcula de forma diferente según si la luminosidad es mayor o menor a 0.5.

---

### 3. Copia al portapapeles con microfeedback

Al hacer clic en una tarjeta de color, se copia el código al portapapeles usando la API nativa del navegador y se muestra un mensaje temporal al usuario.

```javascript
tarjeta.addEventListener("click", function () {
  const colorSeleccionado = textoColor.textContent;

  navigator.clipboard.writeText(colorSeleccionado)
    .then(function () {
      mensajeRta.textContent = "Su color ha sido copiado con exito";
      mensajeRta.classList.add("mensaje-activo");
      clearTimeout(tiempoMensaje);
      tiempoMensaje = setTimeout(function () {
        mensajeRta.classList.remove("mensaje-activo");
      }, 2000);
    });
});
```

- `navigator.clipboard.writeText()` es una API moderna que permite copiar texto al portapapeles sin librerías externas.
- `.then()` se ejecuta cuando la copia fue exitosa, mostrando el mensaje de confirmación.
- `setTimeout` oculta el mensaje después de 2 segundos, creando el efecto de toast.

---

### 4. Cambio de formato en tiempo real

Cuando el usuario cambia entre HEX y HSL, todas las tarjetas existentes se actualizan sin regenerar la paleta, manteniendo los mismos colores.

```javascript
for (let i = 0; i < formatoColor.length; i++) {
  formatoColor[i].addEventListener("change", function () {
    const tarjetas = document.querySelectorAll(".color-card");

    for (let j = 0; j < tarjetas.length; j++) {
      mostrarValorColor(tarjetas[j]);
    }
  });
}
```

- Se recorren todos los radio buttons de formato con un `for`.
- Al detectar un cambio, se seleccionan todas las tarjetas del DOM con `querySelectorAll`.
- Cada tarjeta llama a `mostrarValorColor()` que recalcula y muestra el código en el nuevo formato usando los valores RGB guardados en `dataset`.

---

### 5. HTML semántico y accesibilidad

La estructura del HTML usa etiquetas semánticas y buenas prácticas de accesibilidad.

```html
<label for="tamano-paleta">Cantidad de colores:</label>
<select id="tamano-paleta">
  <option value="6">6</option>
  <option value="8">8</option>
  <option value="9">9</option>
</select>

<label>
  <input type="radio" name="formato-color" value="HEX" checked>
  HEX
</label>
```

- El `<label for="tamano-paleta">` está asociado al `<select>` mediante el atributo `id`, mejorando la accesibilidad para lectores de pantalla.
- Los `<input type="radio">` están envueltos dentro de `<label>`, permitiendo hacer clic en el texto para seleccionarlos.
- Se usa `checked` en el radio HEX para definir un valor por defecto claro al usuario.

---

## 🚀 Cómo ejecutar el proyecto localmente

1. Clona el repositorio:
```bash
git clone git@github.com:jorgemon85/ProyectoM1_JorgeAlbertoMonsalve.git
```

2. Entra a la carpeta del proyecto:
```bash
cd ProyectoM1_JorgeAlbertoMonsalve
```

3. Abre el archivo `index.html` en tu navegador. No requiere instalación de dependencias ni servidor.

---

## 🌐 Despliegue en producción

La aplicación está publicada con **GitHub Pages**:

👉 [https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/](https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/)

Para desplegar una nueva versión basta con hacer `git push` a la rama `main`. GitHub Pages detecta el cambio automáticamente y publica la nueva versión en pocos minutos.

---

## ✅ Criterios de la consigna cumplidos

- [x] Botón "Generar paleta" operativo
- [x] Generación correcta de colores aleatorios
- [x] Render dinámico según el tamaño seleccionado (6, 8 o 9 colores)
- [x] Microfeedback visible (toast con mensaje temporal)
- [x] Uso de HTML semántico
- [x] Accesibilidad básica: labels asociados a inputs, contraste suficiente, foco visible
- [x] Formatos HEX y HSL disponibles
- [x] Funciona correctamente en desktop

### Extra credit implementado
- [x] Copiar el código al portapapeles al hacer clic sobre un color
- [x] Mejoras visuales de UI (tipografía personalizada, fondo, sombras, diseño de tarjetas)

---

## 👨‍💻 Autor

**Jorge Alberto Monsalve**  
Estudiante Full Stack — Soy Henry, Módulo 1
