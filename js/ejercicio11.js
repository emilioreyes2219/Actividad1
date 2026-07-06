function convertir() {
   
    let km = document.getElementById("kilometros").value;

    if (km === "") {
        return;
    }

    let millas = km * 0.621371;

  
    document.getElementById("millas").value = millas;
}
