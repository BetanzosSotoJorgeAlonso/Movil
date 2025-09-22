var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 
              'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 
              'C', 'K', 'E'];


var numero = parseInt(prompt("Introduce tu número de DNI (sin la letra):"));
var letraUsuario = prompt("Introduce la letra de tu DNI:");


if (numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido.");
} else {

    var letraCorrecta = letras[numero % 23];


    if (letraCorrecta !== letraUsuario.toUpperCase()) {
        alert("La letra indicada no es correcta. La letra correcta es: " + letraCorrecta);
    } else {
        alert("El número y la letra de DNI son correctos.");
    }
}