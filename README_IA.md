# 🤖 Documentación del uso de Inteligencia Artificial

Este documento registra el uso de la herramienta de IA **Claude** durante el desarrollo del Proyecto Integrador M1 — ColorFly Studio.

La IA fue utilizada como asistente de desarrollo, ayudando a implementar funcionalidades, resolver errores y mejorar el código HTML, CSS y JavaScript del proyecto.

---

## 🛠️ Herramienta utilizada

| Campo | Detalle |
|---|---|
| **Herramienta** | Claude |
| **Uso principal** | Asistente de desarrollo web |

---

## 📋 Prompts utilizados y resultados obtenidos

---

### 1. Corrección de rutas de imágenes y fuentes

**Prompt utilizado:**
> *"Porque mi codigo en github page se ve así, faltan las fuentes y la imagen de fondo"*

**Resultado obtenido:**
Claude identificó que el problema era la diferencia entre mayúsculas y minúsculas en las rutas de los archivos. En Windows no importa, pero GitHub Pages corre en Linux donde sí distingue. Corrigió las rutas en `styles.css` de `../img/fondo.jpg` a `./Img/Fondo.jpg` y en `fonts.css` de `./fonts/` a `./Fonts/`.

**📸 Captura:** 

![Captura](./Assets/Captura_1.png)
![Captura](./Assets/Captura_2.png)
---

### 2. Refactorización del código para usar arrays

**Prompt utilizado:**
> *"primero la manipulacion de arrays"*

**Resultado obtenido:**
Claude refactorizó el `script.js` para guardar los colores como objetos dentro de un array llamado `paletaActual`, separando la lógica en funciones claras: `generarColores()`, `renderizarPaleta()` y `actualizarFormato()`. Esto cumple con el objetivo del curso de manipular arrays en JavaScript.

**📸 Captura:** 

![Captura](./Assets/Captura_3.png)
![Captura](./Assets/Captura_4.png)

---

### 3. Implementación del bloqueo de colores

**Prompt utilizado:**
> *"ahora si incluyamos el bloqueo de colores"*

**Resultado obtenido:**
Claude agregó la propiedad `bloqueado: false` a cada objeto del array, un candado emoji en cada tarjeta y la lógica para que al regenerar solo se reemplacen los colores con `bloqueado: false`. También agregó los estilos CSS del candado y el borde blanco al bloquearse.

**📸 Captura:** *(pegar captura de la respuesta aquí)*

---

### 4. Texto blanco o negro automático según luminosidad

**Prompt utilizado:**
> *"La primera opcion: Texto automático blanco/negro → mejora visual inmediata y fácil"*

**Resultado obtenido:**
Claude implementó la función `calcularColorTexto()` usando la fórmula de luminosidad perceptual. El verde tiene mayor peso (0.587) porque el ojo humano es más sensible a él. Si la luminosidad supera 128, el texto es negro; si no, es blanco. Se aplicó tanto al código de color como al candado de cada tarjeta.

**📸 Captura:** 

![Captura](./Assets/Captura_5.png)

---

### 5. Animaciones CSS

**Prompt utilizado:**
> *"1 animaciones sutiles"*

**Resultado obtenido:**
Claude agregó tres animaciones usando solo CSS: animación de entrada con `@keyframes` para las tarjetas al generarse, efecto hover que eleva las tarjetas 6px con sombra más pronunciada, y transición suave en el botón Generar al pasar el mouse.

**📸 Captura:** *(pegar captura de la respuesta aquí)*

---

### 6. Contador de colores bloqueados

**Prompt utilizado:**
> *"GEnera los archivos completos"* *(refiriéndose al contador de bloqueados)*

**Resultado obtenido:**
Claude implementó la función `actualizarContador()` que recorre el array y cuenta los colores con `bloqueado: true`, mostrando el resultado en un `<p>` del DOM. Usó `visibility: hidden` en lugar de `display: none` para que el contador no desplace el contenido al aparecer o desaparecer.

**📸 Captura:** *(pegar captura de la respuesta aquí)*

---

## 🧠 Reflexión sobre el uso de la IA

El uso de la IA como asistente de desarrollo permitió:

- **Aprender mientras se construía:** cada respuesta venía acompañada de explicaciones que ayudaron a entender el porqué de cada decisión técnica, no solo el cómo.
- **Resolver errores en tiempo real:** problemas como las rutas de archivos en GitHub Pages fueron identificados y resueltos rápidamente al compartir capturas de pantalla.
- **Mantener el código a nivel básico:** en todo momento se pidió que las soluciones fueran apropiadas para un estudiante de nivel 1, evitando conceptos avanzados fuera del alcance del módulo.
- **Mejorar la calidad del proyecto:** la IA propuso mejoras extras como el texto automático blanco/negro y las animaciones CSS que enriquecieron la experiencia de usuario.

---

## 👨‍💻 Autor

**Jorge Alberto Monsalve**
Estudiante Full Stack — Soy Henry, Módulo 1
Cohorte WEBFT74