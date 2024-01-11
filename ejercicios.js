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

// Número dividido en mitades
// Dado un número, devuelve el número dividido en sus mitades en una matriz.

function numDiv(numero) {
    const mitades = [];
    const mitad = numero / 2;

    for (let i = 0; i < 2; i++) {
        mitades.push(mitad);
    }

    return mitades;
}

console.log(numDiv(4));  
console.log(numDiv(10)); 

//Sociedad secreta
// Encuentra el nombre de una sociedad secreta según la primera letra del nombre de cada miembro.

function secretName(miembros) {
    let nombreSecreto = '';

    for (let i = 0; i < miembros.length; i++) {
        nombreSecreto += miembros[i][0];
    }

    return nombreSecreto;
}

console.log(secretName(["Esperanza", "Franco", "Nia"])); // Debería devolver 'EFN'
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); // Debería devolver 'CJMPRR'
console.log(secretName(['Harry', 'Ron', 'Hermione'])); // Debería devolver 'HHR'












// Matriz de múltiplos
// Cree una función que tome dos parámetros (número, longitud) y devuelva una matriz de longitud que contenga múltiplos del número.

function arrayMultiplos(numero, long) {
    const result = [];

    for (let i = 1; i <= long; i++) {
        result.push(numero * i); // El método push es muy práctico para añadir valores a un array. push es genérico intencionadamente. Este método puede ser call() o apply() a objetos que representen arrays. El método push depende de la propiedad length para decidir donde empezar a insertar los valores dados.
    }

    return result;
}

console.log(arrayMultiplos(2, 10));
console.log(arrayMultiplos(17, 6));

// Dominio positivo en Array
// Escribe una función para determinar si una matriz es positivamente dominante.
// Una matriz es positivamente dominante cuando la mayoría de sus elementos son positivos.

function positiveDom(matriz) {
    const longitud = matriz.length;
    let contadorPositivos = 0;

    for (let i = 0; i < longitud; i++) {
        if (matriz[i] > 0) {
            contadorPositivos++;
        }
    }
    // La matriz se considera positivamente dominante si la mayoría de sus elementos son positivos
    return contadorPositivos > longitud / 2;
}

console.log(positiveDom([-1, -3, -5, 4, 6767]));

