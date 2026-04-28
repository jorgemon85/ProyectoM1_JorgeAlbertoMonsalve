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
- **Dos formatos de color disponibles:**
  - `HEX` (ej: #A3F2C1)
  - `HSL` (ej: 145, 78%, 79%)
- **Cambio de formato en tiempo real** sin necesidad de regenerar la paleta
- **Copia al portapapeles** al hacer clic sobre cualquier tarjeta de color
- **Microfeedback visual (toast):** mensajes de confirmación animados para cada acción del usuario
- **Paletas con coherencia cromática:** los colores se generan a partir de una base aleatoria con variaciones controladas

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

## 🚀 Cómo ejecutar el proyecto localmente

1. Clona el repositorio:
```bash
git clone git@github.com:jorgemon85/ProyectoM1_JorgeAlbertoMonsalve.git
```

2. Entra a la carpeta del proyecto:
```bash
cd ProyectoM1_JorgeAlbertoMonsalve
```

3. Abre el archivo `index.html` en tu navegador preferido. No requiere instalación de dependencias ni servidor.

---

## 🌐 Cómo ver el despliegue en producción

La aplicación está publicada con **GitHub Pages** y puede verse directamente en:

👉 [https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/](https://jorgemon85.github.io/ProyectoM1_JorgeAlbertoMonsalve/)

---

## 🧠 Decisiones técnicas

- **Generación cromática coherente:** en lugar de generar colores completamente aleatorios, se definió una base RGB aleatoria y cada color adicional se genera con una variación máxima de ±35 en cada canal. Esto produce paletas visualmente armónicas en lugar de colores totalmente dispares.

- **Conversión RGB → HSL manual:** la conversión al formato HSL se implementó desde cero con lógica matemática en JavaScript, sin usar librerías externas, aplicando la fórmula estándar de conversión.

- **Copia al portapapeles:** se usó la API nativa `navigator.clipboard.writeText()` para copiar el código del color al hacer clic en una tarjeta.

- **Microfeedback tipo toast:** se implementó un sistema de mensajes temporales con `setTimeout` que informa al usuario sobre cada acción: generar paleta, copiar color y cambiar formato.

- **Fuentes locales:** las fuentes (FredokaOne, Galindo, Roboto) se cargan desde archivos locales mediante `@font-face` en `fonts.css`, sin depender de servicios externos como Google Fonts.

- **Sin estilos inline:** todos los estilos están en archivos CSS externos (`styles.css` y `fonts.css`), siguiendo las buenas prácticas de separación de responsabilidades.

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
