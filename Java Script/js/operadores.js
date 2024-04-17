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
function generarNota() {
    return Math.floor(Math.random() * 81) + 20; // Número aleatorio entre 20 y 100
  }
  
  // Nombres de ejemplo
  const nombres = ["Juan", "María", "Luis", "Ana", "Carlos", "Sofía", "Pedro", "Laura", "Miguel", "Valeria"];
  
  // Array de estudiantes con nombres y notas aleatorias
  let estudiantes = [];
  
  // Generar notas aleatorias para los estudiantes
  for (let i = 0; i < 10; i++) {
    const nombre = nombres[Math.floor(Math.random() * nombres.length)]; // Obtener un nombre aleatorio
    const nota = generarNota(); // Generar una nota aleatoria
    estudiantes.push({ nombre: nombre, nota: nota }); // Agregar el estudiante al array
  }
  
  console.log("Estudiantes:");
  console.log(estudiantes);
  
  // Obtener la nota mayor
  let notaMayor = -Infinity; // Inicializar la variable con un valor muy pequeño
  
  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    if (estudiante.nota > notaMayor) {
      notaMayor = estudiante.nota;
    }
  }
  
  console.log("Nota mayor:", notaMayor);
  
  // Obtener la nota menor
  let notaMenor = Infinity; // Inicializar la variable con un valor muy grande
  
  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    if (estudiante.nota < notaMenor) {
      notaMenor = estudiante.nota;
    }
  }
  
  console.log("Nota menor:", notaMenor);
  
  // Calcular el promedio de las notas
  let sumatoriaNotas = 0; // Variable para almacenar la sumatoria de las notas
  
  for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];
    sumatoriaNotas += estudiante.nota;
  }
  
  const promedioNotas = sumatoriaNotas / estudiantes.length;
  console.log("Promedio de las notas:", promedioNotas);