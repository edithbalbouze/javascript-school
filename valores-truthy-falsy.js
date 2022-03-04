//ejemplos en los que boolean devuelve falso
Boolean(); //false
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//ejemplos en los que boolean devuelve verdadero
Boolean(1); //true                  para 1 o cualquier numero diferente a cero(0)
Boolean("a"); //true                para cualquier caracter o espacio en blanco en el string
Boolean([]); //true                 aunque el array este vacio
Boolean({}); //true                 aunque el objeto este vacio
Boolean(function(){}); //true       cualquier funcion es verdadera
Boolean(true); //true