let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById("nombre").value.trim();
    let calificacion = document.getElementById("calificacion").value;

    if (nombre === "" || calificacion === "" || isNaN(calificacion)) {
        return;
    }

    estudiantes.push({ nombre: nombre, calificacion: Number(calificacion) });

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

function calcular() {
    if (estudiantes.length === 0) {
        return;
    }

    let promedio = estudiantes.reduce((total, e) => total + e.calificacion, 0) / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteMax = estudiantes.find(e => e.calificacion === calificacionMaxima).nombre;
    let estudianteMin = estudiantes.find(e => e.calificacion === calificacionMinima).nombre;

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("mayor").value = estudianteMax;
    document.getElementById("menor").value = estudianteMin;
}
