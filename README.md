# 🎨 ColorFly Studio — Generador de Paletas Interactivo

Aplicación web estática e interactiva que permite generar paletas de colores aleatorias de forma rápida e intuitiva. Desarrollada como Proyecto Integrador del Módulo 1 del curso Full Stack en [Soy Henry](https://www.soyhenry.com/).

🌐 **Demo en vivo:** [https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/](https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/)

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de la aplicación |
| CSS3 | Estilos, animaciones y layout con Flexbox |
| JavaScript (Vanilla) | Lógica, manipulación del DOM y eventos |
| Git | Control de versiones |
| GitHub | Repositorio y portafolio |
| GitHub Pages | Despliegue de la aplicación |

---

## ✨ Funcionalidades

### Generación de paletas
- Botón principal **"Generar"** que crea una paleta de colores aleatoria al instante.
- Selección del tamaño de la paleta: **6, 8 o 9 colores**.
- Los colores se generan con **coherencia cromática**: parten de una base aleatoria con variaciones controladas de ±35 por canal RGB, produciendo paletas visualmente armónicas.

### Formatos de color
- Visualización en dos formatos a elección del usuario: **HEX** y **HSL**.
- El cambio de formato se aplica **en tiempo real** sobre la paleta actual, sin necesidad de regenerarla.

### Copiar al portapapeles
- Al hacer **clic sobre cualquier tarjeta** de color, su código se copia automáticamente al portapapeles.
- Funciona tanto en formato HEX como HSL según el formato seleccionado.

### Bloqueo de colores 🔒
- Cada tarjeta tiene un **candado** en la esquina superior derecha.
- Al hacer clic en el candado, el color queda **bloqueado** y no cambia al regenerar la paleta.
- Al hacer clic nuevamente, el color se **desbloquea**.
- Un **contador** muestra en tiempo real cuántos colores están bloqueados (ej: `🔒 2 de 8 bloqueados`). Aparece solo cuando hay al menos un color bloqueado.

### Microfeedback (toast)
- Mensajes temporales que informan al usuario sobre cada acción:
  - Al generar una paleta
  - Al copiar un color
  - Al cambiar el formato
  - Al bloquear o desbloquear un color

### Texto automático blanco o negro
- El texto del código de cada color se ajusta automáticamente a **blanco o negro** según la luminosidad del fondo, garantizando siempre un contraste legible.

### Animaciones
- Las tarjetas aparecen con una **animación de entrada suave** al generarse.
- Al pasar el mouse sobre una tarjeta, esta **sube levemente** con una sombra más pronunciada.
- El candado se **agranda** al hacer hover.
- El botón **Generar** cambia de color suavemente al hacer hover.

---

## 📖 Manual de usuario

### Paso 1 — Abrir la aplicación
Accede desde el navegador en:
👉 [https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/](https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/)

No requiere instalación, registro ni inicio de sesión.

---

### Paso 2 — Elegir la cantidad de colores
Haz clic en el menú desplegable **"Cantidad de colores"** y selecciona cuántos colores quieres en tu paleta:

| Opción | Descripción |
|---|---|
| **6** | Paleta pequeña, ideal para identidades visuales simples |
| **8** | Paleta intermedia, equilibrio entre variedad y cohesión |
| **9** | Paleta amplia, útil para sistemas de diseño completos |

---

### Paso 3 — Elegir el formato de color
Selecciona el formato en el que quieres ver los códigos de color:

- **HEX** — Formato hexadecimal. Ejemplo: `HEX: #A3F2C1`
  - Es el formato más usado en CSS y herramientas de diseño web.
- **HSL** — Matiz, Saturación y Luminosidad. Ejemplo: `HSL: 145, 78%, 79%`
  - Útil para entender la composición del color de forma intuitiva.

Puedes cambiar entre formatos en cualquier momento sin perder la paleta generada.

---

### Paso 4 — Generar la paleta
Haz clic en el botón rosa **"Generar"**. La aplicación creará una paleta de colores armónicos y los mostrará como tarjetas en pantalla. Cada tarjeta muestra:
- El **color de fondo** generado
- El **código del color** en el formato seleccionado
- Un **candado** en la esquina superior derecha

Aparecerá un mensaje de confirmación indicando cuántos colores se generaron.

> 💡 Puedes hacer clic en **"Generar"** todas las veces que quieras para obtener paletas diferentes.

---

### Paso 5 — Bloquear un color
Si encontraste un color que te gusta y no quieres que cambie al regenerar:

1. Haz clic en el **candado 🔓** de esa tarjeta
2. El candado cambiará a **🔒** y aparecerá un borde blanco alrededor de la tarjeta
3. El contador debajo del botón **Generar** mostrará cuántos colores están bloqueados
4. Al hacer clic en **"Generar"** nuevamente, los colores bloqueados se mantendrán intactos

Para desbloquear un color, vuelve a hacer clic en el candado 🔒.

---

### Paso 6 — Copiar un color
Haz clic sobre cualquier tarjeta de color (no en el candado) para copiar su código al portapapeles. Aparecerá el mensaje:
> *"Su color ha sido copiado con éxito"*

Luego pégalo en tu editor de código o herramienta de diseño con **Ctrl + V**.

---

### Paso 7 — Cambiar el formato sin regenerar
Si ya tienes una paleta generada y quieres ver los mismos colores en otro formato, haz clic en **HEX** o **HSL**. Los códigos se actualizarán instantáneamente sin cambiar los colores.

---

### Resumen del flujo
```
Abrir la app
     ↓
Seleccionar cantidad de colores (6, 8 o 9)
     ↓
Elegir formato (HEX o HSL)
     ↓
Hacer clic en "Generar"
     ↓
Bloquear los colores que te gusten 🔒
     ↓
Volver a generar para renovar los no bloqueados
     ↓
Hacer clic en un color para copiarlo
     ↓
Pegar el código en tu proyecto ✅
```

---

## 💻 Fragmentos de código explicados

### 1. Generación de colores con coherencia cromática

En lugar de generar colores completamente aleatorios, se define una base RGB aleatoria y cada color adicional varía como máximo ±35 en cada canal. Esto produce paletas visualmente armónicas.

```javascript
const rango = 35;
const rojoBase = Math.floor(Math.random() * 256);
const verdeBase = Math.floor(Math.random() * 256);
const azulBase = Math.floor(Math.random() * 256);

rojo = Math.min(255, Math.max(0,
  rojoBase + Math.floor(Math.random() * (rango * 2 + 1)) - rango
));
```

- `Math.random() * 256` genera un valor aleatorio entre 0 y 255.
- `Math.min(255, Math.max(0, ...))` garantiza que el resultado nunca salga del rango válido RGB.
- `rango * 2 + 1` define una ventana de 71 valores posibles alrededor de la base, manteniendo los colores cercanos entre sí.

---

### 2. Array de objetos para gestionar la paleta

Cada color se guarda como un objeto dentro de un array. Esto permite modificar propiedades individuales (como `bloqueado`) sin tocar el DOM.

```javascript
let paletaActual = [];

const color = {
  rojo: 120,
  verde: 45,
  azul: 200,
  bloqueado: false
};

paletaActual.push(color);
```

- `paletaActual` es el array que contiene todos los colores de la paleta activa.
- Cada color es un **objeto** con sus valores RGB y su estado de bloqueo.
- `push()` agrega el objeto al final del array.

---

### 3. Bloqueo de colores con el array

Al regenerar, solo se reemplazan los colores que tienen `bloqueado: false` en el array. Los bloqueados permanecen intactos.

```javascript
for (let i = 0; i < paletaActual.length; i++) {
  if (paletaActual[i].bloqueado === false) {
    // Solo se regenera si no está bloqueado
    paletaActual[i] = { rojo: rojo, verde: verde, azul: azul, bloqueado: false };
  }
  // Si bloqueado === true, el objeto no se toca
}
```

- Se recorre el array con un `for`.
- La condición `bloqueado === false` decide si el color se reemplaza o se conserva.
- Al hacer clic en el candado, se usa `!` para invertir el valor: `paletaActual[i].bloqueado = !paletaActual[i].bloqueado`.

---

### 4. Conversión de RGB a HSL

La conversión se implementó manualmente con la fórmula matemática estándar, sin librerías externas.

```javascript
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
- La **saturación** se calcula diferente según si la luminosidad supera o no el 50%.

---

### 5. Texto blanco o negro automático

El ojo humano percibe los colores con diferente intensidad. Esta fórmula calcula la luminosidad perceptual y elige el color de texto más legible.

```javascript
function calcularColorTexto(rojo, verde, azul) {
  const luminosidad = (rojo * 0.299) + (verde * 0.587) + (azul * 0.114);
  if (luminosidad > 128) {
    return "#000000"; // Color claro → texto negro
  } else {
    return "#ffffff"; // Color oscuro → texto blanco
  }
}
```

- El verde tiene el mayor peso (0.587) porque el ojo humano es más sensible a él.
- El azul tiene el menor peso (0.114) porque se percibe con menos intensidad.
- Si el resultado supera 128 (mitad de 255), el color se considera claro y se usa texto negro.

---

### 6. Copia al portapapeles con microfeedback

La API nativa del navegador copia el texto y luego se muestra un toast temporal.

```javascript
navigator.clipboard.writeText(colorSeleccionado)
  .then(function () {
    mostrarMensaje("Su color ha sido copiado con exito");
  })
  .catch(function () {
    mostrarMensaje("No se pudo copiar el color");
  });
```

- `navigator.clipboard.writeText()` es una API moderna que no requiere librerías externas.
- `.then()` se ejecuta si la copia fue exitosa.
- `.catch()` se ejecuta si hubo un error (por ejemplo, permisos denegados).

---

### 7. Animación de entrada con CSS

Las tarjetas aparecen suavemente desde abajo al generarse, usando solo CSS sin JavaScript.

```css
@keyframes aparecerTarjeta {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.color-card {
  animation: aparecerTarjeta 0.4s ease forwards;
}
```

- `@keyframes` define los estados inicial y final de la animación.
- `opacity: 0` hace la tarjeta invisible al inicio.
- `translateY(20px)` la desplaza 20 píxeles hacia abajo al inicio.
- `forwards` mantiene el estado final una vez que termina la animación.

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

## 🚀 Cómo ejecutar el proyecto localmente

1. Clona el repositorio:
```bash
git clone git@github.com:jorgemon85/ProyectoM1_JorgeAlbertoMonsalve.git
```

2. Entra a la carpeta:
```bash
cd ProyectoM1_JorgeAlbertoMonsalve
```

3. Abre `index.html` en tu navegador. No requiere instalación de dependencias ni servidor.

---

## 🌐 Despliegue en producción

La aplicación está publicada con **GitHub Pages**:

👉 [https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/](https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/)

Para desplegar una nueva versión basta con hacer `git push` a la rama `main`. GitHub Pages detecta el cambio automáticamente.

---

## ✅ Criterios de la consigna cumplidos

- [x] Botón "Generar paleta" operativo
- [x] Generación correcta de colores aleatorios
- [x] Render dinámico según el tamaño seleccionado (6, 8 o 9 colores)
- [x] Microfeedback visible (toast con mensaje temporal)
- [x] Uso de HTML semántico
- [x] Accesibilidad básica: labels asociados, contraste suficiente, foco visible
- [x] Formatos HEX y HSL disponibles
- [x] Funciona correctamente en desktop

### Extra credit implementado
- [x] Bloqueo de colores con candado por tarjeta
- [x] Animaciones de entrada y hover
- [x] Copiar código al portapapeles al hacer clic
- [x] Mejoras visuales de UI (tipografía, fondo, sombras, texto automático)

---

## 👨‍💻 Autor

**Jorge Alberto Monsalve**
Estudiante Full Stack — Soy Henry, Módulo 1
Cohorte WEBFT74