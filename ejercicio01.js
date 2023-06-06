// Cálculo 
function next_pal(numero) {
    function esPalindromo(num) {
      const str = num.toString();
      const longitud = str.length;
      for (let i = 0; i < longitud / 2; i++) {
        if (str[i] !== str[longitud - 1 - i]) {
          return false;
        }
      }
      return true;
    }
  
    let siguienteNumero = numero + 1;
    while (!esPalindromo(siguienteNumero)) {
      siguienteNumero++;
    }
    return siguienteNumero;
  }
  
  // Ejemplo de uso de la función (cálculo)
  const numeroInicial = 11;
  const siguientePalindromo = next_pal(numeroInicial);
  console.log(`El siguiente número palíndromo después de ${numeroInicial} es: ${siguientePalindromo}`);

