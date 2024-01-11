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

console.log(secretName(["Esperanza", "Franco", "Nia"])); // 
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'])); 
console.log(secretName(['Harry', 'Ron', 'Hermione'])); // 

// Estado en linea
// Muestra el estado en línea de una lista de usuarios.

function onlineStatus(usuarios) {
    let enLinea = 0;

    usuarios.forEach(usuario => {
        if (usuario.endsWith('EnLinea')) { // Se utilizo endsWith para determina si una cadena de texto termina con los caracteres de una cadena indicada, devolviendo true o false según corresponda
            enLinea++;
        }
    });

    if (enLinea === 0) {
        return 'Ningún usuario en línea';
    } else if (enLinea === 1) {
        return usuarios.join(', ') + ' está en línea';
    } else {
        return usuarios.join(', ') + ' y ' + (enLinea - 1) + ' más están en línea';
    }
}

console.log(onlineStatus(['mockIng99EnLinea', 'J0eyPunch', 'glassedFerEnLinea'])); // Debería devolver 'mockIng99EnLinea, glassedFerEnLinea y 1 más están en línea'

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

// Promedio antípoda
// Dada una matriz, devuelva una matriz más corta siguiendo estos pasos:
// Divida la matriz en dos partes iguales*. Si no es igual, elimine el elemento del medio para obtener dos matrices iguales.
// Sumar cada número de la primera parte con los números inversos de la segunda parte.
// Divide cada número de la matriz resultante entre 2.

function transformarMatriz(matriz) {
    // Dividir la matriz en dos partes iguales
    const mitad = Math.floor(matriz.length / 2);
    const primeraParte = matriz.slice(0, mitad);
    const segundaParte = matriz.slice(-mitad);

    // Eliminar el elemento del medio si la longitud de la matriz es impar
    if (matriz.length % 2 !== 0) {
        segundaParte.pop();
    }

    // Inicializar la matriz resultante
    const resultado = [];

    // Sumar cada número de la primera parte con los números inversos de la segunda parte y dividir entre 2
    for (let i = 0; i < primeraParte.length; i++) {
        const sumaInversa = primeraParte[i] + 1 / segundaParte[i];
        const resultadoFinal = sumaInversa / 2;
        resultado.push(resultadoFinal);
    }

    return resultado;
}

// Ejemplo de uso
console.log(transformarMatriz([1, 2, 3, 5, 22, 6])); // Debería devolver [3.5, 12, 4]
