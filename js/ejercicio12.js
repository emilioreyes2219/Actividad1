function convertir() {
    
    let mxn = document.getElementById("pesos").value;

    if (mxn === "" || mxn <= 0) {
        return;
    }

    const tasaCambio = 0.055;

    let usd = mxn * tasaCambio;

    document.getElementById("dolares").value = usd.toFixed(2);
}
