// version 4 java script
function validar(formulario) {

    if (formulario.nombre.value.lenght < 3) {
        alert("Escriba por lo menos 3 carcateres en el campo de nombre");
        //focus nos ayuda  alocalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.nombre.focus();
        return false
    }

}