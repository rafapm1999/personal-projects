/* //Seleccionar los simbolos
const equal = document.querySelector("#btn-equal");
const sum = document.querySelector("#btn-sum");
const min = document.querySelector("#btn-min");
const div = document.querySelector("#btn-div");
const percent = document.querySelector("#btn-percent");
const mult = document.querySelector("#btn-mult");

//Seleccionar los numeros
const num9 = document.querySelector("#btn-9");
const num8 = document.querySelector("#btn-8");
const num7 = document.querySelector("#btn-7");
const num6 = document.querySelector("#btn-6");
const num5 = document.querySelector("#btn-5");
const num4 = document.querySelector("#btn-4");
const num3 = document.querySelector("#btn-3");
const num2 = document.querySelector("#btn-2");
const num1 = document.querySelector("#btn-1");
const num0 = document.querySelector("#btn-0");
const num00 = document.querySelector("#btn-00"); */

//

/* equal.addEventListener("click", (e) => {
    return ;
})
sum.addEventListener("click", (e) => {
    return ;
})
min.addEventListener("click", (e) => {
    return ;
})
div.addEventListener("click", (e) => {
    return ;
})
percent.addEventListener("click", (e) => {
    return ;
})
mult.addEventListener("click", (e) => {
    return ;
})
 */









//Resolucion del calculadora

const calculator = document.querySelector("table");
const keys = calculator.querySelector("tbody");
const display = document.querySelector("#data")

keys.addEventListener("click", (e) => {
    if (e.target.matches("td")) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        console.log(action);
        console.log(keyContent);
        console.log(displayedNum);
        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        } else if (action) {
            switch (action) {
                case "delete":
                    return alert("HOLA");
                case "sumatory":
                    return display.textContent = displayedNum + keyContent;
                case "minus":
                    return display.textContent = displayedNum + keyContent;
                case "divide":
                    return display.textContent = displayedNum + keyContent;
                case "percent":
                    return display.textContent = displayedNum + keyContent;


                default:
                    break;
            }
        }
    }
})
