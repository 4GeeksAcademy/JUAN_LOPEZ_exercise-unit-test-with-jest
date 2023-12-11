const sum = (a,b) =>{
    return a + b
}
console.log(sum(7,3));

// Declaramos una función con el nombre exacto "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declamos una funcion con el nombre exacto "fromDollarToYen"
const fromDollarToYen = (valueInDollar) => {
    // hacemos la convercion en Yen
    let valueInYen = valueInDollar * 146.47;
    // Retorna valor en yenes
    return valueInYen;
}
// Declaramos una funcion con el nombre de "fromYenToPound"
const fromYenToPound = (valueInYen) => {
    // Hacemos la convercion en Yen
    let valueInPound = valueInYen * 0.0054;
    return valueInPound
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
