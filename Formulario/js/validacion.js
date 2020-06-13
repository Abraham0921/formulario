// version 4 java script
function validar(formulario) {

    if (formulario.nombre.value.length < 3) {
        alert("Escriba por lo menos 3 carcateres en el campo de nombre");
        //focus nos ayuda  alocalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.nombre.focus();
        return false
    }

    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnmé";
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
        if (j == checkOk.length) {
            allValid = false;
            break;
        }

    }
    //saber estado de valid
    if (!allValid) {
        alert("Escriba letras en el formulario de Nombre");
        formulario.nombre.focus();
        return false;
    }
    if (formulario.edad.value.length < 2) {
        alert("Escriba maximo 2 digitos o la maxima edad es de 99");
        //focus nos ayuda  alocalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.edad.focus();
        return false
    }
    var checkOk = "1234567890";
    var checkString = formulario.edad.value;
    alert(checkString)
    var allValid = true;

    for (var i = 0; i < checkString.length; i++) {
        //charAt  nos ayuda a separar una cadena en carcateres
        //ejemplo Ana.... char A n a
        var ch = checkString.charAt(i);
        for (var j = 0; j < checkOk.length; j++)
            if (ch == checkOk.charAt(j))
                break;
        if (j == checkOk.length) {
            allValid = false;
            break;
        }

    }
    //saber estado de valid
    if (!allValid) {
        alert("Escriba solo numero en el campo Edad");
        formulario.edad.focus();
        return false;
    }

}