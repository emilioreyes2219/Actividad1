document.addEventListener("DOMContentLoaded", () => {
    const manejarTareas = () => {
        let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

        const guardar = () => {
            localStorage.setItem("tareas", JSON.stringify(tareas));
        };

        const renderizar = () => {
            let lista = document.getElementById("listaTareas");
            lista.innerHTML = "";
            tareas.forEach((t, i) => {
                let li = document.createElement("li");
                li.textContent = t;
                let btn = document.createElement("button");
                btn.textContent = "Eliminar";
                btn.onclick = () => eliminar(i);
                li.appendChild(btn);
                lista.appendChild(li);
            });
        };

        const agregar = () => {
            let tarea = document.getElementById("tarea").value.trim();
            if (tarea === "") {
                Swal.fire({
                    title: 'Error',
                    text: 'La tarea no puede estar vacía.',
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                });
                return;
            }
            tareas.push(tarea);
            guardar();
            renderizar();
            document.getElementById("tarea").value = "";
        };

        const eliminar = (index) => {
            Swal.fire({
                title: '¿Eliminar tarea?',
                text: 'Esta acción no se puede deshacer.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    tareas.splice(index, 1);
                    guardar();
                    renderizar();
                    Swal.fire('Eliminada', 'La tarea ha sido eliminada.', 'success');
                }
            });
        };

        renderizar();

        return { agregar, eliminar };
    };

    const manejar = manejarTareas();

    // Asignar evento al botón
    document.getElementById("btnAgregar").addEventListener("click", manejar.agregar);
});
