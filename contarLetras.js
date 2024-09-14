function contaLetra(texto, letra){
    quantidadeLetra = 0;

    for(let i = 0; i < texto.length; i++){
        if(texto[i] === letra){
            quantidadeLetra++;
        }
    }

    return quantidadeLetra;
}

entraTexto = "Texto para verificar quantidade de letras";
escolheLetra = "e";

console.log("A letra escolhida aparece " + contaLetra(entraTexto, escolheLetra) + " vezes no texto.");