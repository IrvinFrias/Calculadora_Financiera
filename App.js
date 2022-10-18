const btnSend = document.querySelector(".btn__send");

const calcularInteres = (evento) => {
    evento.preventDefault();
    const capitalHTML = document.querySelector("[data-form-capital]");
    const capital = parseFloat(capitalHTML.value);
    const mesesHTML = document.querySelector("[data-form-meses]");
    const meses = parseFloat(mesesHTML.value);
    const tasaHTML = document.querySelector("[data-form-tasa]");
    const tasa = parseFloat(tasaHTML.value);
    const interes = capital * (tasa/(100*12)*meses);
    const total = document.querySelector(".total__monto");
    total.innerHTML = ` $ ${interes + capital} `;

    capitalHTML.value = "";
    mesesHTML.value = "";
    tasaHTML.value = "";

}

btnSend.addEventListener("click",calcularInteres);

