/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];

const numeros = Array(7).fill(0).map((_, index) => 7 - index).filter(num => num % 2 !== 0);
result = numeros

//export result
module.exports = result;