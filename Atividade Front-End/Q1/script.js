function validarNota(){
    var nota = -1;
    while (nota < 0 || nota > 10){
    nota = parseInt(prompt("Insira uma nota de 0 a 10: " ))
        if (nota >= 0 && nota <= 10) {
        alert("Sua nota foi validada com sucesso!");
        break
        }
        alert("Essa nota não é válida. Insira uma nova nota e tente novamente.")
    }
}
