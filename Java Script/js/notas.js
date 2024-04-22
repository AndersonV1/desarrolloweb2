//generar un array de 10 elementos
//nombre"juan" y nota: randomico entre 20-100
//mostrar la nota mayor menor y promedio 

let Notas = [
    { nombre: 'Juan', nota: 0 },
    { nombre: 'Julio', nota: 0 },
    { nombre: 'Judas', nota: 0 },
    { nombre: 'Jariel', nota: 0 },
    { nombre: 'James', nota: 0 },
    { nombre: 'Jorge', nota: 0 },
    { nombre: 'Jeans', nota: 0 },
    { nombre: 'Julian', nota: 0 },
    { nombre: 'Jeremias', nota: 0 },
    { nombre: 'Jane', nota: 0 }
  ];
  
  // Generar notas aleatorias entre 20 y 100
  function cargarNotas(){
  Notas = Notas.map(nota => ({ ...nota, nota: Math.floor(Math.random() * (10 - 2 + 1)) + 2 }));
  }
  
  // Calcular nota mayor, menor y promedio
  let sumaNotas = Notas.reduce((suma, nota) => suma + nota.nota, 0);
 /* 
  let notaMayor = Math.max(...Notas.map(nota => nota.nota));
  let notaMenor = Math.min(...Notas.map(nota => nota.nota));
  let promedio = sumaNotas / Notas.length;
  
  // Obtener objeto de la persona con la mayor nota
  let personaMayorNota = Notas.find(nota => nota.nota === notaMayor);
  
  // Obtener objeto de la persona con la menor nota
  let personaMenorNota = Notas.find(nota => nota.nota === notaMenor);
  
  
  console.log('La nota mayor es de:', personaMayorNota.nota, 'de', personaMayorNota.nombre);
  console.log('La nota menor es de:',personaMenorNota.nota , 'de', personaMenorNota.nombre);
  console.log('Promedio:', promedio);
*/
console.log('Notas:', Notas);

Notas.forEach(nota=>{
    let $clasificar;
    switch(nota.nota){
      case 2: case 3: case 4:
        $clasificar="Insuficiente";
        break;
      case 5: case 6:
        $clasificar="Suficiente";
        break;
        case 7: case 8:
          $clasificar="Bien";
          break;
          case 9:
            $clasificar="Notable";
            break;
            case 10: 
            $clasificar="Sobresaliente";
            break;
            default:
              $clasificar="Fuera de rango";
    } 
    console.log(nota.nombre+"-"+nota.nota+":"+$clasificar+"\n");
  });

