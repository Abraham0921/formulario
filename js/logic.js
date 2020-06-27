//problema 1
function problema1() {
    //obtener los valores del input
    var p1_input = document.querySelector('#p1-input').value;
    //identificar como dividir el texto con espacios y depsues meterlo en un arreglo
    var p1_array = p1_input.split(' ').reverse();
    //contruir la nueva cadena apartir de mi array invertido
    var p1_res = '';
    p1_array.array.forEach(function(palabra, i) {
        //si es el principio o el final de la cadena y no agregamos espacio en blanco
        if (i != 0 || i != p1_array.length) p1_res += ' ';
        p1_res += palabra;
    });
    //imprimimos el resultado final
    document.querySelector('#p1-output').textContent = p1_res;
}