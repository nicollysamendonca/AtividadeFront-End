function encontrarMaiorNumero(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var numero3 = parseInt(document.getElementById("numero3").value);
    var numero4 = parseInt(document.getElementById("numero4").value);
    var numero5 = parseInt(document.getElementById("numero5").value);

    var soma = numero1+numero2+numero3+numero4+numero5;
    var media = soma/5;

    alert("A SOMA dos números é: " +soma+ " e a MÉDIA é: " +media+ " . ")
}