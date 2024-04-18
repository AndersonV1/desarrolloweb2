/*let a=10;
let b=5;
a+=1;
console.log(a);
a=a+b;
console.log("a=a+b:"+a);
a=11;
a+=b;
console.log("a+=b:"+a);
a++;
console.log("a++:"+a);
a--;
console.log("a--:"+a);

if(a%2==0)
    console.log("a es PAR");
else
    console.log("a es IMPAR");
console.log(a+b+Number("5"));*/

//generar un array de 10 elementos
//nombre"juan" y nota: randomico entre 20-100
//mostrar la nota mayor menor y promedio 



// Función para generar una nota aleatoria en el rango de 20 a 100
let notas=[{nombre: 'Juan',nota:0},
{nombre: 'Julio',nota:0},
{nombre: 'Judas',nota:0},
{nombre: 'Jariel',nota:0},
{nombre: 'James',nota:0},
{nombre: 'Jorge',nota:0},
{nombre: 'Jeans',nota:0},
{nombre: 'Julian',nota:0},
{nombre: 'Jeremias',nota:0},
{nombre: 'Jane',nota:0}];

console.log(Notas);

notas.forEach(nota=>{
nota.nota=Math.random()*(10-2+1);

});
Notas.forEach(nota=>{
  let $clasificar;
  switch(nota.nota){
    case 2: case 3:case 4:
      $clasificar="insufi"
      break;
      case 5: case 6:
      $clasificar="insufi"
      break;
      case 7: case 8:
        $clasificar="insufi"
        break;
        case 9:
          $clasificar="insufi"
          break;
          case 10:
            $clasificar="insufi"
            break;
      
  }
 
})