var formulario = document.getElementById("calcularPrecio");

function Calcular() {
    var cantidad = document.getElementById("cantidad").value;
    var tamaño = formulario.tam.value;
    var combo = document.getElementById("combo").value;
    var total = 0;

    if (tamaño == "chico") {
        total = 100;
    } else if (tamaño == "mediano") {
        total = 150;
    } else if (tamaño == "grande") {
        total = 200;
    }

    if (formulario.integral.checked) {
        total += 10;
    } else if (formulario.papa.checked) {
        total += 15;
    } else if (formulario.parmesano.checked) {
        total += 20;
    } else if (formulario.blanco.checked) {
        total += 5;
    }

    var ingredientes = formulario.querySelectorAll('input[name="ingredientes"]:checked');
    total += ingredientes.length * 10;

    if (combo == "si") {
        total += 40;
    }

    total = total * cantidad;
    formulario.total.value = total;
}
