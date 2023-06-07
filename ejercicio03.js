function contarNombres(list) {
    let contador = {};
    // Contar las repeticiones de cada nombre
    for (let i = 0; i < list.length; i++) {
      let nombre = list[i].toLowerCase(); //aquí se indica que contemple uso de mayúsculas o minúsculas
      if (contador[nombre]) {
        contador[nombre]++;
      } else {
        contador[nombre] = 1;
      }
    }
  
    // Representar las repeticiones con asteriscos
    for (let nombre in contador) {
      let repeticiones = contador[nombre];
      let asteriscos = "*".repeat(repeticiones);
      console.log(nombre + ": " + asteriscos);
    }
  }
let nombres = ["Juan", "Pedro", "María", "PEDRO", "Juan", "MARÍA", "María"];
contarNombres(nombres);

