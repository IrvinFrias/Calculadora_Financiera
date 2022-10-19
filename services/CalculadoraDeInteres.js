 export class CalculadoraDeInteres {
    capital;
    meses;
    tasaAnual;
    frecuenciaCapitalizacion;

    constructor(capital, meses, tasaAnual, frecuenciaCapitalizacion) {
        this.capital = capital;
        this.meses = meses;
        this.tasaAnual = tasaAnual;
        this.frecuenciaCapitalizacion = frecuenciaCapitalizacion;
    }

    /*Metodos*/

    /*Calcula el interes simple anual*/
     static interesSimple(capital, meses, tasaAnual){
        return capital * ((tasaAnual/(100*12))*meses);
    }
    /*Calcula el interes compuesto Anual   */
     static interesCompuestoAnual(capital, meses, tasaAnual){
         return capital * ((1 + tasaAnual/100)**(meses/12))
     }
     /*Calcula el interes compuesto Semestral*/
     static interesCompuestoSemestral(capital, meses, tasaAnual){
         return capital * (1 + (tasaAnual / (100 * 2)))**(meses / 6)
     }
     /*Calcula el interes compuesto Trimestral*/
     static interesCompuestoTrimestral(capital, meses, tasaAnual){
         return capital * (1 + (tasaAnual / (100*4)))**(meses/3);
     }
     /*Calcula el interes compuesto mensual*/
     static interesCompuestoMensual(capital, meses, tasaAnual){
         return capital *(1 + (tasaAnual / (100* 12)))**(meses);
     }
     /*Calcula el interes compuesto Diariamente*/
     static interesCompuestoDiariamente(capital, meses, tasaAnual){
         return capital *(1 + (tasaAnual/ (100 *365)))**(meses*30);
     }


}