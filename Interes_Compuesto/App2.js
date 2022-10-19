import {data} from "../services/datosBasicosCliente.js";
import {CalculadoraDeInteres} from "../services/CalculadoraDeInteres.js";

const btnSend = document.querySelector(".btn__send");

const calcularInteresCompuesto = (evento) => {
    evento.preventDefault();
    const dataObj = data();
    const frecuenciaCapi = parseInt(document.querySelector("#selectBox").value);
    const total = document.querySelector(".total__monto");


    if (frecuenciaCapi === 1){
        let interes = CalculadoraDeInteres.interesCompuestoAnual(dataObj.capital, dataObj.meses, dataObj.tasa);
        total.innerHTML = ` $ ${interes.toFixed(2)} `;
    }else if(frecuenciaCapi === 2) {
        let interes = CalculadoraDeInteres.interesCompuestoSemestral(dataObj.capital, dataObj.meses, dataObj.tasa);
        total.innerHTML = ` $ ${interes.toFixed(2)} `;
    }else if(frecuenciaCapi === 3){
        let interes = CalculadoraDeInteres.interesCompuestoTrimestral(dataObj.capital, dataObj.meses, dataObj.tasa);
        total.innerHTML = ` $ ${interes.toFixed(2)} `;

    }else if(frecuenciaCapi === 4){
        let interes = CalculadoraDeInteres.interesCompuestoMensual(dataObj.capital, dataObj.meses, dataObj.tasa);
        total.innerHTML = ` $ ${interes.toFixed(2)} `;

    }else if(frecuenciaCapi === 5){
        let interes = CalculadoraDeInteres.interesCompuestoDiariamente(dataObj.capital, dataObj.meses, dataObj.tasa);
        total.innerHTML = ` $ ${interes.toFixed(2)} `;

    }

}


btnSend.addEventListener("click",calcularInteresCompuesto);


