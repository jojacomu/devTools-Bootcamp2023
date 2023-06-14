//Recorrer número de 1 hasta n
//Validar divisible por 3; imprimir "Fizz"
//Si el número es divisible por 5, debes imprimir "Buzz".
// Si el número es divisible tanto por 3 como por 5, debes imprimir "FizzBuzz".
// Si el número no es divisible ni por 3 ni por 5, debes imprimir el número tal cual.

let numero = ''
function fizzBuzz() {
  if (numero%3 === 0 && numero%5 === 0) {
      console.log('FizzBuzz')
    } else if (numero%3 === 0) {
      console.log('Fizz')
    } else if (numero%5 === 0) {
      console.log('Buzz')
    } else {
      console.log(numero)
    }
}
fizzBuzz('15')