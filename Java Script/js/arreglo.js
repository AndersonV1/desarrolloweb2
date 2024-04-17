//compras a un supermercado
   /* let carrito=[
    "Leche", 1,
    "carne", 2,
    "papa", 3,
    "fideos", 1];
  /*  console. log("Item"+carrito[0]);
    console. log("Cantidad:"+carrito [1]); 
    console. Log("Item:"+carrito[2]);
    console. log("Cantidad:"+carrito[3]);
    console, Log("Item:"+carrito[4]);
    console. Log("Cantidad:"+carrito [5]);
    console. log("Item:"+carrito[6]);
    console. log("Cantidad:"+carrito[7]);
    console.log("impresion  completa ");
    console.log(carrito);
    carrito.push("zapatos", 5);
    console.log(carrito);*/

   /* let item = {nombre: 'leche', cantidad: 1};
console.log("item: " + item.nombre);
console.log("cantidad: " + item.cantidad);

let carrito = [
  {nombre: 'leche', cantidad: 1},
  {nombre: 'carne', cantidad: 2},
  {nombre: 'fideo', cantidad: 1},
  {nombre: 'papa', cantidad: 3}
];
console.log(carrito);

// Agregar nuevo elemento al carrito
carrito.push({nombre: 'soda', cantidad: 4});

console.log("Impresión completa:");
console.log(carrito);*/



//adicionar item del precio y el total  
let carrito=[{nombre: 'Leche',cantidad:1,precio:7.5},
             {nombre: 'Carne',cantidad:2,precio:15},
             {nombre: 'fideo',cantidad:1,precio:10},
             {nombre: 'papa',cantidad:3,precio:6}];

             console.log("Carrito con precios y totales:");
             carrito.forEach((item) => {
               // Calcular precio total
               const precioTotal = item.cantidad * item.precio;
             
               console.log("Nombre: " + item.nombre);
               console.log("Cantidad: " + item.cantidad);
               console.log("Precio: Bs" + item.precio);
               console.log("Precio Total: Bs" + precioTotal);
               console.log("------------------------");
             });

item={nombre: 'pilfrut',cantidad:5,precio:1.5};
carrito.push(item);
const precioTotal = item.cantidad * item.precio;
             
console.log("Nombre: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: Bs" + item.precio);
console.log("Precio Total: Bs" + precioTotal);
console.log("------------------------");
console.log(carrito);