export const data = (data) => {
    const capitalHTML = document.querySelector("[data-form-capital]");
    const capital = parseFloat(capitalHTML.value);
    const mesesHTML = document.querySelector("[data-form-meses]");
    const meses = parseFloat(mesesHTML.value);
    const tasaHTML = document.querySelector("[data-form-tasa]");
    const tasa = parseFloat(tasaHTML.value);

    /*
    capitalHTML.value = "";
    mesesHTML.value = "";
    tasaHTML.value = "";*/


    return {
        capital,
        meses,
        tasa
    };
}