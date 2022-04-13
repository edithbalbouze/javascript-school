//callback: es un funcion que al crearla le pasamos como parametro una segunda funcion, de esta forma al momento de hacer una peticion o algun llamado asincrono, esta se ejecuta despues de ese llamado.

function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));


function date(callback){
    console.log(new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);