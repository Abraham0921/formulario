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

    if (formulario.correo.value.length < 5) {
        alert("Escriba el correo con el formato xxx.x@x.x");
        //focus nos ayuda  alocalizar donde esta el error del llenado
        //realiza un posicionamiento al elemento del formulario
        formulario.correo.focus();
        return false
    }
    var fecha = formulario.fecha.value;
    var y = fecha.substring(0, fecha.lastIndexOf("-") - 3);
    var m = fecha.substring(5, fecha.lastIndexOf("-"));
    var d = fecha.substring(fecha.lastIndexOf("-") + 1);
    // Verificación de año bisiesto (true/false) (limitado a rango 1900..2100)

    alert("año:" + y)
    alert("mes:" + m)
    alert("dia:" + d)

    alert("el años bisiesto es: " + (((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)));

    var txt = formulario.correo.value;
    //expresion regular
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
        // ejemplo@ejemplo
        //ejemplo@ejemplo.ejemplo
        // todo lo que esta adentro de los [] es la expresion
        //para la creacion de curp, una llave compartida
    alert("Email:" + (b.test(txt) ? "" : "no") + "valido");
    // si b.test(txt) "" es verdadero : sino "no" falso
    return b.test(txt);


}