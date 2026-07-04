function calcular() {
    let cadena = document.getElementById("numeros").value;
    if (cadena.trim() === "") {
        return;
    }
    let arreglo = cadena.split(",").map(Number);
    if (arreglo.some(isNaN)) {
        return;
    }
    let mayor = Math.max(...arreglo);
    let menor = Math.min(...arreglo);
    let suma = arreglo.reduce((acc, valor) => acc + valor, 0);
    let promedio = suma / arreglo.length;
    document.getElementById("mayor").value = mayor;
    document.getElementById("menor").value = menor;
    document.getElementById("promedio").value = promedio;
}
