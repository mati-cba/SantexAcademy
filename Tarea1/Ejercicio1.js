/*1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:
para valor 6
1
12
123
1234
12356*/

function ejercicio1(){
    var numero =  parseInt(prompt("Ingrese un numero: "));
    let acum = "";
    for (let i = 1; i <= numero; i++) {
        acum += i;
        console.log(acum);
    }
}
ejercicio1();