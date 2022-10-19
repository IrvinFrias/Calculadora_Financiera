import {data} from "./services/datosBasicosCliente.js";
import {CalculadoraDeInteres} from "./services/CalculadoraDeInteres.js";


const btnSend = document.querySelector(".btn__send");

const calcularInteres = (evento) => {
    evento.preventDefault();

    const dataObj = data();
    const interes = CalculadoraDeInteres.interesSimple(dataObj.capital, dataObj.meses, dataObj.tasa);
    const total = document.querySelector(".total__monto");
    total.innerHTML = ` $ ${(interes + dataObj.capital).toFixed(2)} `;

}

btnSend.addEventListener("click",calcularInteres);

