function ventas() {
    if (formulario.salario.value == 0 || formulario.salario.value == 0) {
        alert("No deve de ir el campo vacio");
        formulario.salrio.focus();
        return false
    }
    var ventas = prompt("Escriba la nueva venta");
    var salario = parseInt(formulario.salario.value);
    // inciso 1 las comisiones de las ventas comision =  12.5%
    var comision = 12.5
    var total = (ventas * comision) / 100
    alert('La comision de la venta es: $' + total)
        //inciso 2 su salario mas el extra de la comisión.
    var totalSalario = total + salario;
    alert('La suma de su salario mas su comision es: $' + totalSalario)
    var allValid = true;
    if (!allValid) {
        alert("Escriba solo numero en el campo Salario");
        formulario.salrio.focus();
        return false;
    }
    //no acepta -1
    if (salario >= 1) {
        alert('no es positivo')
    }
    //no acepta mas de dos punto
    var decExp = /^[1-9]\d*(\.\d+)?$/
    if (!decExp.test(salario)) {
        alert('Ese valor no esta permitido')
    }



}