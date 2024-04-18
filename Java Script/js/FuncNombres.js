// Función para generar un nombre aleatorio (solo como ejemplo, puedes implementar tu propia lógica)
function generarNombreAleatorio() {
    const nombresAleatorios = ["Juan", "María", "Pedro", "Laura", "Luisa"];
    return nombresAleatorios[Math.floor(Math.random() * nombresAleatorios.length)];
  }
  
  // Función para generar un apellido aleatorio (solo como ejemplo, puedes implementar tu propia lógica)
  function generarApellidoAleatorio() {
    const apellidosAleatorios = ["Gómez", "Martínez", "López", "Fernández", "Rodríguez"];
    return apellidosAleatorios[Math.floor(Math.random() * apellidosAleatorios.length)];
  }
  
  // Función para generar nombres y almacenarlos en un array
  function generarNombres(N) {
    let nombres = [];
    for (let i = 0; i < N; i++) {
      let nombre = generarNombreAleatorio();
      nombres.push(nombre);
    }
    return nombres;
  }
  
  // Función para generar apellidos y almacenarlos en un array
  function generarApellidos(N) {
    let apellidos = [];
    for (let i = 0; i < N; i++) {
      let apellido = generarApellidoAleatorio();
      apellidos.push(apellido);
    }
    return apellidos;
  }
  
  function generarNombresCompletos(nombres, apellidos) {
    let nombresCompletos = [];
    for (let i = 0; i < nombres.length; i++) {
      // Selecciona un nombre y un apellido aleatorio de las listas proporcionadas
      let nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
      let apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
      // Concatena el nombre y el apellido para formar un nombre completo
      let nombreCompleto = nombreAleatorio + " " + apellidoAleatorio;
      nombresCompletos.push(nombreCompleto);
    }
    return nombresCompletos;
  }
  // Número deseado de elementos
  let N = 10;
  
  // Generar nombres y apellidos
  let nombres = generarNombres(N);
  let apellidos = generarApellidos(N);
  let nombresCompletos = generarNombresCompletos(nombres, apellidos);


console.log("Nombres:", nombres.join(", ")+"\n");
  console.log("Apellidos:", apellidos.join(", ")+"\n");
  console.log("Nombres completos:", nombresCompletos.join(", ")+"\n");