/*
Descripcion:Ejemplo de variable 
Desarrollador:anderson vargas
fecha:2024-04-15
cambios:ninguno
*/


//const INTERVALO=10;

//console.log("intervalo sera de" + INTERVALO + "minutos");
//INTERVALO=15;
//intervalo=15; //no se permite por ser constante
/*
const intervalo=15;
console.log("intervalo sera de" + intervalo + "minutos");
intervalo=20;
console.log("intervalo de" + intervalo + "minutos con una variable modificada");*/


/*let varb=true;//boleano
let varn= 3.141592;//numerico
let vars="tecto string";//cadena
let var1;//indefinido

console.log("para la variable varb="+varb+"cone el tipo dato="+typeof varb)
console.log("para la variable varn="+varn+"cone el tipo dato="+typeof varn)
console.log("para la variable vars="+vars+"cone el tipo dato="+typeof vars)
console.log("para la variable var1="+var1+"cone el tipo dato1="+typeof var1)

var1=vars
console.log("para la variable var1="+var1+"cone el tipo dato1="+typeof var1)*/

//Realizar las siguientes conversiones implicitas.
let var1=15.25;
let var2=0;
let var3=true;
let var4="100";
let resultado;
/*
varx=var2;//Colocar comentario

console. log("Para la variable var1="+varx+" con el tipo dato="+typeof varx);

varx=var3;//Colocar comentario

console. log("Para la variable var1="+varx+" con el tipo dato="+typeof varx);

varx=var4;//Colocar comentario

console. log("Para la variable var1="+varx+" con el tipo dato="+typeof varx);*/

//conversiones explicitas 

resultado=var1+var2;
console.log("para la var1= "+resultado+"con el tipo de dato= "+typeof resultado);
resultado=Boolean(var2)+var3;
console.log("para la var1= "+resultado+"con el tipo de dato= "+typeof resultado);
resultado=var1+Number(var4);
console.log("para la var1= "+resultado+"con el tipo de dato= "+typeof resultado);




