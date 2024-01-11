//Suma de resistencias en serie
 //Calcule la suma de todas las resistencias conectadas en serie.

 function sumResistance(resistances) {
    let totalResistance = 0;

    for (let i = 0; i < resistances.length; i++) {
        totalResistance += Math.abs(resistances[i]); // Se utilizo el metodo abs para devolver el valor absoluto de un número Decimal.

    }

    return `${totalResistance} ohmios`;
}

console.log(sumResistance([-1, 5, 6, 3]));
console.log(sumResistance([14, 3.5, 6]));
console.log(sumResistance([8, 15, 100]));

