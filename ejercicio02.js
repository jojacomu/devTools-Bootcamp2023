//Creación de la función
function createPhoneNumber(array) {
    let phoneNumber = array.join('');
        phoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
return phoneNumber;
}
//Ejecución de la función
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let numeroTelefono = createPhoneNumber(numeros);
console.log(numeroTelefono);