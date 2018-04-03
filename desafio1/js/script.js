function somar() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = num1 + num2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function subtrair() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = num1 - num2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function dividir() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = num1 / num2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multiplicar() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = num1 * num2;

    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}