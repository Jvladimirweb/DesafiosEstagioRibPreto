entrada = 14;

function SequenciaFibo(n){
    let compare = [0, 1];
    for(let i = 2; i < n; i++){
        compare[i] = compare[i - 1] + compare[i - 2];
    }
    if(compare.includes(entrada)){
        console.log("O numero faz parte da sequencia Fibonacci");
    }else{
        console.log("Este numero não faz parte da sequencia Fibonacci")
    }
    return compare;
}

console.log(SequenciaFibo(entrada));