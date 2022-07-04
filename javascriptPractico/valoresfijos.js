//Codigo del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cmˆ2");

console.groupEnd();

//Codigo del triangulo

console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El petrimetro del triangulo es: " +  perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cmˆ2")

console.groupEnd();


//Codigo del circulo

console.group("Circulo");

//Radio

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI

const PI = Math.PI;
console.log("PE es: " + PI);


//Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro de la circulo es: " + perimetroCirculo + "cm");

//Area

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cmˆ2")

console.groupEnd();