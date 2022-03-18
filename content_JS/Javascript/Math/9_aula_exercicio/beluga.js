function sortear(n){
    var _n = n || 1;
    var numSorteado = Math.random();
    numSorteado = numSorteado * _n;
    numSorteado = Math.floor(numSorteado)
    return numSorteado
}