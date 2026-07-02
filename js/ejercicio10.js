function convertir() {
    const celsius = document.getElementById("celsius").value;
    if (celsius === "" || isNaN(celsius)) {
        alert("Por favor ingresa un número válido.");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2) + " °F";
}
