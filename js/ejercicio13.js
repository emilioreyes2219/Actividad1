function verificarEdad() {
    let edad = document.getElementById("edad").value;

    if (edad === "" || edad <= 0) {
        document.getElementById("resultado").value = "Edad inválida";
        return;
    }
    if (edad >= 18) {
        document.getElementById("resultado").value = "Puedes votar";
    } else {
        document.getElementById("resultado").value = "No puedes votar";
    }
}
