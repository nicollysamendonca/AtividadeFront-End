var populacaoA = 80000;
var populacaoB = 200000;
var taxaA = 0.03;
var taxaB = 0.015;

var anos = 0;

while (populacaoA < populacaoB){
    anos ++;
    if (populacaoA > populacaoB){
        break;
    }
    console.log("A população A é de: " + populacaoA.toFixed());
    console.log("A população B é de: " + populacaoB.toFixed());

    populacaoA += populacaoA*taxaA;
    populacaoB += populacaoB*taxaB;
}

console.log("A população do país A é de: " + populacaoA.toFixed());
console.log("A população do país B é de: " + populacaoB.toFixed());

console.log("É necessário " + anos + " para que a popuklação do país A iguale ou ultrapasse a população do país B.");
