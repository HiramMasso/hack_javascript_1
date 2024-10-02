/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

const numeros = Array(7).fill(0).map((_, index) => index + 1).filter(num => num % 2 !== 0)
result = numeros

//export result
module.exports = result;