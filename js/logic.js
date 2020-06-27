//problema 1
function problema1() {
    //obtener los valores del input
    var p1_input = document.querySelector('#p1-input').value;
    //identificar como dividir el texto con espacios y depsues meterlo en un arreglo
    var p1_array = p1_input.split(' ').reverse();
    //contruir la nueva cadena apartir de mi array invertido
    var p1_res = '';
    p1_array.forEach(function(palabra, i) {
        //si es el principio o el final de la cadena y no agregamos espacio en blanco
        if (i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });
    //imprimimos el resultado final
    document.querySelector('#p1-output').textContent = p1_res;
}

function problema2() {
    /*para encontrar el minimo producto escalar entre dos vectores tenemos que realizar
    las operaciones correspondientes con el maximo valor de un vector por el minimo
    vector del otro */
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;
    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;
    //construccion de vector
    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
    //ordenarlos para realizar la operacion
    v1 = v1.sort(function(a, b) {
        return b - a;
    });
    v2 = v2.sort(function(a, b) {
        return b - a;
    });
    // invertimo v2
    v2 = v2.reverse();
    // realizamos el prodcuto escalar
    var p2_producto = 0;
    for (var i = 0; i < v1.length; i++) {
        p2_producto += v1[i] * v2[i]
    }
    document.querySelector('#p2-output').textContent = "Producto escalar minimo" + p2_producto;
}