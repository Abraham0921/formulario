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

function problem3() {
    //definir el alfabeto
    var alfabeto = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ñ',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M'
    ];
    //obtenemos los elemenots del input y lo separamos por comas
    var p3_input = document.querySelector('#p3-input').value;
    var p3_palabras = p3_input.split(',');
    //eleminar espacios en blanco
    p3_palabras = p3_palabras.map(function(palabra) {
        return palabra.replace(/\s/g, '').toUpperCase();
    });
    //calcular cuantos caracteres conicos tenemos
    var p3_res = '';
    //iterar dentro de la palabra
    p3_palabras.forEach(function(palabra, i) {
        //separar la palbara actual del array y vamos obtener lo que hay en dicha palabra
        var letras_unicas = [];
        var palabras_array = palabra.split('');
        //iteramos por el alfabeto
        alfabeto.forEach(function(letra, j) {
            //iteramos sobre la palabra para obetener cada elemento
            palabras_array.forEach(function(letra_palabra, k) {
                //la palabra esta adentro del alfabeto
                if (letra_palabra == letra) {
                    //si la letra no la hemos enocntrado la agregamos al array pars contar las letras unicas
                    if (letras_unicas.indexOf(letra) < 0) {
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'Palabra ' + palabra + ' = ' + 'Letras unicas: ' + letras_unicas.length + '\n';
    })
    document.querySelector('#p3-output').textContent = p3_res;

}