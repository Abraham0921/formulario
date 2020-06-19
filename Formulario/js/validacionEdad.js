function valEdad(formulario) {
    //validar si la fecha es correcta
    var fecha = formulario.fecha.value;
    var y = fecha.substring(0, fecha.lastIndexOf("-") - 3);
    var m = fecha.substring(5, fecha.lastIndexOf("-"));
    var d = fecha.substring(fecha.lastIndexOf("-") + 1);
    var fevchaAño = new Date(y, 1, 1); // Año en 4 dígitos
    var formatoFecha = new Date(y, m, d); // Formato de fecha del form
    alert((fevchaAño.getFullYear() == formatoFecha.getFullYear() &&
        m == formatoFecha.getMonth()) ? "Fecha Correcta" : "Fecha Incorrecta");

    if (formulario.fecha.value == null) {
        alert('El campo no debe de estar vasio');

    }
}