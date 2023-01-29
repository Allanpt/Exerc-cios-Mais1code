const matrizFlat = lista => {
    let listaUnica = []
    for(let i = 0; i < lista.length; i++){
        for(let j = 0; j < lista[i].length; j++){
            listaUnica.push(lista[i][j])
        }
    }
    return listaUnica
}

console.log(matrizFlat()) // Digite Listas dentro da lista(parâmetro)
// Exemplo
console.log(matrizFlat([[1,2,3],[4,5,6],[7,8,9],[12,7,35,99]])) // [1,2,3,4,5,6,7,8,9,12,7,35,99]

