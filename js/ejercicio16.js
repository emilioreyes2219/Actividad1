const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : null;

function calcularOperacion(operacion) {
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    if (num1.trim() === "" || num2.trim() === "" || isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            title: 'Error',
            text: 'Por favor ingrese números válidos.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
        return;
    }

    num1 = Number(num1);
    num2 = Number(num2);
    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = sumar(num1, num2);
            break;
        case 'resta':
            resultado = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(num1, num2);
            break;
        case 'division':
            resultado = dividir(num1, num2);
            if (resultado === null) {
                Swal.fire({
                    title: 'Error',
                    text: 'No se puede dividir entre cero.',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                });
                return;
            }
            break;
    }

    document.getElementById("resultado").value = resultado;
}
