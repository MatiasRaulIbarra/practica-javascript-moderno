//Un arreglo es una coleccion de informacion que se encuentra en una misma variable
// Arreglo en JS

const arreglo= [1,2,3,4];


let arreglo2 = [...arreglo,5]


const arreglo3=arreglo2.map(function (numero){

    return numero *2;
});

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)