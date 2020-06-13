// version 4 java script
function validar(formulario) {

    if (formulario.nombre.value.length < 3) {
        alert("Escriba por lo menos 3 carcateres en el campo de nombre");
        //focus nos ayuda  alocalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.nombre.focus();
        return false
    }

    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";
    var checkString = formulario.nombre.value;
    alert(checkString)
    var allValid = true;
    for (var i = 0; i < checkString.length; i++) {
        //charAt  nos ayuda a separar una cadena en carcateres
        //ejemplo Ana.... char A n a
        var ch = checkString.charAt(i);
        for (var j = 0; j < checkOk.length; j++)
            if (ch == checkOk.charAt(j))
                break;
        if (j == checkOk.length)
            allValid = false;
        break;

    }
    //saber estado de valid
    if (!allValid) {
        alert("Escriba letras en el formulario de Nombre");
        formulario.nombre.focus();
        return false;
    }
}