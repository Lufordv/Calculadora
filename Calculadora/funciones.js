
/* Creamos dos constantes:
La constante display es para seleccionar lo que nos muestra la calculadora.
La constante button es para seleccionar todos los botones */
const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

/* Con un forEach sobre la constante button recorremos todos los botones y les agregamos un evento de click. */
button.forEach((item) => {
    item.onclick = () => {
        // Si presioamos el boton clear, limpia la consola
        if (item.id == "clear") {
            display.innerText = "";
            // Si presionamos el boton backspace elimina el ultimo caracter
        } else if (item.id == "backspace") {
            // Para ello convertimos la información a una cadena de texto
            let string = display.innerText.toString();
            // Después le decimos que con cada click elimine el último caracter de la cadena
            display.innerText = string.substr(0, string.length - 1)
            /* Si la pantalla no está vacía y presionamos = llamamos al método eval para que calcule la operación aritmética seleccionada */
        } else if (display.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
            /* Si la pantalla está vacía y presionamos = muestra err" y después de dos segundos limpia la pantalla */
        } else if (display.innerText == "" && item.id == "equal") {
            display.innerText = "Err";
            setTimeout(() => (display.innerText = ""), 2000);
            /* En caso contrario concatena la información de cada botón que sea pulsado */
        } else {
            display.innerText += item.id;
        }
    };
});

const themetoggleBtn = document.querySelector(".theme-toggle");
const calculator = document.querySelector(".calculator");

let isDark = true;
themetoggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themetoggleBtn.classList.toggle("active")
    isDark = !isDark
}