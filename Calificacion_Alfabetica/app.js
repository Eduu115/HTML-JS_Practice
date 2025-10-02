// definimos variables

const resultados = ["Muy deficiente", "Insuficiente", "Bien", "Notable", "Sobresaliente"];


// obtenemos elementos del documento
let caja_resultados = document.getElementById('resultado');
let boton_reiniciar = document.getElementById('reload');

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    let nota = document.getElementById("nota").value;
    nota = parseInt(nota);

    if (nota > 10 || nota < 0) {
        alert("Por favor, introduce una nota válida entre 0 y 10.");
        return;
    }
    if (nota == null || isNaN(nota)) {
        alert("Por favor, introduce una nota.");
        return;
    }


    console.log(nota)

    let resultadoFinal = null;

    if (nota == 0) {
        resultadoFinal = resultados[0];
    } else if (nota > 0 && nota < 5) {
        resultadoFinal = resultados[1];
    } else if (nota == 5 || nota == 6) {
        resultadoFinal = resultados[2];
    } else if (nota == 7 || nota == 8) {
        resultadoFinal = resultados[3]
    } else if (nota == 9 || nota == 10) {
        resultadoFinal = resultados[4]
    }

    console.log(resultadoFinal);

    caja_resultados.innerHTML=`
        ${resultadoFinal}
    `;
        
});

boton_reiniciar.addEventListener('click', () => {
    window.location.reload();
});
