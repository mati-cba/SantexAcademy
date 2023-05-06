/**3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}

Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal*/
/*
agregarProducto(nombre, precio, unidades){
    // Completar aca...
}*/
/*Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}

3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un
mensaje si el item ya existe “ya existe xxx con yyy unidades” */

class Carrito{
    constructor(){
        this.montoTotal = 0;
        this.productos = [];
    }

    agregarProducto(nombre, precio, unidades){
        if(this.productos.includes(nombre)){
            console.log(`ya existe ${nombre} con ${unidades} unidades`);
        }else{
        this.montoTotal += precio * unidades;
        this.productos.push(nombre);
        }
    };
}


const carrito1 = new Carrito();

carrito1.agregarProducto("Azucar", 5,2);
carrito1.agregarProducto("Leche", 5,2);
carrito1.agregarProducto("Leche", 5,2);

console.log(carrito1);





