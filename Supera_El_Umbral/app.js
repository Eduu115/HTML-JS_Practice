let numeros = [];
let contador = 0;
let formulario = document.getElementById("form-numero");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    let numeroInput = document.getElementById("numero");
    let numero = parseInt(numeroInput.value);
    if (isNaN(numero) || numero < 0 || numero == null || !(numero>0 && numero<10)) { // validamos que sea real, no nulo positivo, y que no se salga del rango de 0 a 10
        alert("Por favor, introduce un número POSITIVO válido entre 0 y 10");
        return;
    }

    for (let index = 0; index < 100; index++) {
        numeroGenerado = Math.floor(Math.random() * 11);
        numeros.push(numeroGenerado);
        if (numeroGenerado >= numero) {
            contador++;
        }
    }
    console.log(numeros);
    console.log(contador);
    document.getElementById("resultado-resultado").innerText = `Se han generado ${contador} números iguales o superiores a ${numero}`;
    contador = 0;
    // Pintar el array en el HTML
    let listaNumeros = document.getElementById("array-numeros");
    let cuadroNumeros = document.getElementById("cuadro-array");
    cuadroNumeros.className = "d-flex";
    listaNumeros.innerHTML = "";
    listaNumeros.className = "d-flex flex-wrap gap-1";
    console.log(listaNumeros);
    numeros.forEach(function(num) {
        let li = document.createElement("li");
        li.innerText = num;
        listaNumeros.appendChild(li);
    });

    document.getElementById("cuadro-resultado").className = "d-flex";
    console.log(document.getElementById("cuadro-resultado"));

    document.getElementById("numero-umbral").innerText = numero;
    // Reiniciar el array y el formulario

    numeros = [];
    formulario.reset();
});