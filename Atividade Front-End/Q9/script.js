function ExibirNumeros(){
    for(i =0;i<50;i++){
        if(i%2!==0){
            var divEl = document.createElement("div");
            var textEl = document.createTextNode(i);
            divEl.appendChild(textEl);
            document.getElementById("NumerosImpares").appendChild(divEl)
        }
    }
}