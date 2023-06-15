//Crear variable a ingresar
let tamano = 95;
//Crear función drawX(tamano)
function drawX(tamano) {
    if (tamano < 3 || tamano%2 === 0) {
        console.log("El tamaño debe ser un número impar mayor o igual a 3.");
        return;
    }
    for (let i = 0; i < tamano; i++) {
        let line = "";
        for (let j = 0; j < tamano; j++) {
            if (i === j || i + j === tamano - 1) {
                line += "*";
            } else {
                line += " ";
            }
        }
    console.log(line);
    }  
}

drawX(tamano);