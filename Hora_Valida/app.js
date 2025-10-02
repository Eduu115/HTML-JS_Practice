
const horaInput = document.getElementById("hora");
const mensajeDiv = document.getElementById("mensaje-error");
const form = document.getElementById("form-hora");
const resultadoDiv = document.getElementById("cuadro-resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    const hora = horaInput.value.trim();
    const horaValida = /^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;

    if (!horaValida.test(hora)) {
        mensajeDiv.textContent = "Formato de hora inválido. Usa HH:MM:SS.";
        mensajeDiv.style.display = "block";
        return;
    }

    mensajeDiv.style.display = "none";

    const [_, horas, minutos, segundos] = hora.match(horaValida);
    document.getElementById("hora-resultado").textContent = horas;
    document.getElementById("minutos-resultado").textContent = minutos;
    document.getElementById("segundos-resultado").textContent = segundos;

    // Sumar 1 segundo
    let totalSegundos = parseInt(horas) * 3600 + parseInt(minutos) * 60 + parseInt(segundos) + 1;
    let horasSumadas = Math.floor(totalSegundos / 3600) % 24;
    let minutosSumados = Math.floor((totalSegundos % 3600) / 60);
    let segundosSumados = totalSegundos % 60;

    resultadoDiv.className = "w-100 mt-2 d-flex flex-column align-items-start justify-content-center rounded-3 p-2";

    document.getElementById("hora-sumada-resultado").textContent = `
    ${String(horasSumadas).padStart(2, '0')}:
    ${String(minutosSumados).padStart(2, '0')}:
    ${String(segundosSumados).padStart(2, '0')}
    `;
});
