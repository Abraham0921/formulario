function valPorcentaje(formulario) {
    if (formulario.hombres.value.length == null) {
        alert("No deven de estar los campos vacios!");
        //focus nos ayuda  alocalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.hombres.focus();
        return false
    }
}