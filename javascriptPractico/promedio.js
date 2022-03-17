

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