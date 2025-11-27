// 1 parte 
// Declaración de variables numericas para realizar las operaciones matematicas
let n1 = 10;
let n2 = 2;

let operacion = "division";
let resultado;

if (operacion === "suma"){
    resultado = n1 + n2;
} else if (operacion === "resta"){
    resultado = n1 - n2;
} else if (operacion === "multiplicacion"){
    resultado = n1 * n2;
} else if (operacion === "division"){
    if (n2 === 0){
        console.log("Error: No se puede dividir por 0");
    }else{
        resultado = n1 / n2;
    }
}
console.log(resultado)

// 2 parte  
function realizar_operaciones() {

    while (true) {

        let n1 = parseFloat(prompt("Ingrese un número"));
        let n2 = parseFloat(prompt("Ingrese otro número"));
        let operacion = prompt("Ingrese una operación (suma, resta, multiplicacion, division)").toLowerCase();
        let resultado;

        // Validación de operación 
        if (
            operacion !== "suma" &&
            operacion !== "resta" &&
            operacion !== "multiplicacion" &&
            operacion !== "division"
        ) {
            alert("ERROR: ¡Por favor ingrese una operación válida!");
            continue; // Esto sirve para que salte al inicio otra vez y no ejecute mas el codigo debido a que se ha capturado un error, entonces lo que hace es que no siga ejecutando el codigo.
        }

        // Validación para saber si los números ingresados son validos
        if (isNaN(n1) || isNaN(n2)) {
            alert("ERROR: ¡Debe ingresar números válidos!");
            continue;
        }

        // Según la operación hacemos los calculos
        if (operacion === "suma") {
            resultado = n1 + n2;

        } else if (operacion === "resta") {
            resultado = n1 - n2;

        } else if (operacion === "multiplicacion") {
            resultado = n1 * n2;

        } else if (operacion === "division") {
            if (n2 === 0) {
                alert("ERROR: No se puede dividir por 0");
                continue;
            }
            resultado = n1 / n2;
        }

        console.log("Resultado:", resultado);

        // Otra validación para preguntar al usuario si quiere seguir en el programa
        let seguir = prompt("Escriba 'salir' para finalizar o presione ENTER para continuar:");

        if (seguir === "salir") {
            alert("Adios hasta pronto... Finalizando Código");
            break;
        }
    }
}

realizar_operaciones();
