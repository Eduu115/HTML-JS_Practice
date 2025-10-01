// definimos variables

const resultados = ["Muy deficiente", "Insuficiente", "Bien", "Notable", "Sobresaliente"];

document.addEventListener("DOMContentLoaded", () => {
    // obtenemos elementos del documento
    let caja_resultados = document.getElementById('resultado');

    let formulario = document.getElementById('form');

    formulario.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        let nota = document.getElementById("nota").value;

        let resultadoFinal= null;

        if (nota == 0) {
            resultadoFinal = resultados[0];
        } else if (nota in (1,4)) {
            resultadoFinal = resultados[1];
        } else if (nota in (5,6)) {
            resultadoFinal = resultados[2];
        } else if (nota in (7,8)) {
            resultadoFinal = resultados[3]
        } else if (nota in (9,10)) {
            resultadoFinal = resultados[4]
        }

        caja_resultados.innerHTML=`
            ${resultadoFinal}
        `;
         
    });

});