

const productos = [

    {id: 1, nombre: "campera", precio: 7000},
    
    {id: 2, nombre: "pantalon", precio: 3300},
    
    {id: 3, nombre: "zapatillas", precio: 18000},
    
    {id: 4, nombre: "remera", precio: 2700},
    
    {id: 5, nombre: "camisa", precio: 3000},
    
    ];


alert("Bienvenido/a a Indumentaria Emma");

let nombreUsuario = prompt("Ingrese nombre de usuario :D");

while(nombreUsuario == ""){

alert("Usuario incorrecto");

nombreUsuario = prompt("Intentelo nuevamente");

}

alert(`Hola! ${nombreUsuario}` );


let nombreProducto = (prompt(`Escribi el nombre del producto

1-Campera

2-Pantalon

3-Zapatillas

4-Remera

5-Camisa`

));

let producto = productos.find(item => item.nombre === nombreProducto);

if(producto === undefined){

alert("Producto no encontrado");

}else {

let mensaje = `

Id: ${producto.id}

Nombre: ${producto.nombre}

Precio: $${producto.precio}

`;

alert(`Este es el producto seleccionado ${mensaje}`);

};


const productosActualizados = productos.map(item => {
    return {
       id: item.id,
       nombre: item.nombre,
       precio: item.precio + item.precio * 0.21 
    }
   });

   alert (productosActualizados);