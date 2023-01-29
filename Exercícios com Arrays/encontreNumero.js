const encontreNumero = (lista, numeroNaLista) => {
    let numeroEncontrado = -1
    for(let i = 0; i < lista.length; i++) {
        if(numeroNaLista == lista[i]) {
            numeroEncontrado = lista[i]
        } 
    }
    return numeroEncontrado
}

console.log(encontreNumero()) // Digite dois parâmetros, um "Array" e um número
console.log(encontreNumero([1,2,89,5,3],89)) // 89
console.log(encontreNumero([1,2,89,5,3],3)) // 3