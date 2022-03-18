//PROMEDIO

// Promedio = Media aritmetica : Consiste en sumar cada numero y dividirlo entre la cantidad de numeros que hay
// Ejemplo: 50 + 30 + 60 = 26 / 3 = 40.67


function calcularMediaAritmetica(lista){
//    let sumaLista = 0;

//    for (let i = 0; i < lista.length; i++) {
//        sumaLista = sumaLista + lista[i];
//    }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

//MEDIANA

// Mediana: se ordena la lista de menor a mayor y se toma el de la mitad.
// Ejemplo: 450, 500, 600 la mediana es el elemento del centro 500, los elementos de la lista dos pares se toma los dos del centro (se suma los dos elementos y se divide entre 2)

function calcularMediana (listaMedianda){
    listaMedianda.sort();
    
    const mitadListaMediana = parseInt(listaMedianda.length / 2);
    
    function esPar (numerito){
        if (numerito % 2 === 0) {
            return true;
        }else {
            return false
        }
    }
    
    let mediana;
    
    if (esPar (listaMedianda.length)) {
        const elemento1 = listaMedianda[mitadListaMediana - 1];
        const elemento2 = listaMedianda[mitadListaMediana];
    
        const promedioElemento1y2 = calcularMediaAritmetica ([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElemento1y2;
    }else {
        mediana = listaMedianda[mitadListaMediana];
    }
    return mediana;
}

//MODA

// Moda: es el elemento que mas se repite en una lista
//Ejemplo: 1, 10, 14, 3, 24, 14, 10, 35, 13, 14. La moda es 14 ya que es el numero que mas se repite.

function calcularModa (lista) {
    const listaCount = {};

    lista.map (
        function(elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            } else {
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );

    const moda = listaArray[listaArray.length -1];

    return moda;
}

