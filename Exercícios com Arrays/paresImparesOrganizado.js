const paresImparesOrganizado = (lista) => {
    let listaOrganizada = lista.sort()
    console.log(listaOrganizada)
    let listaPar = []
    let listaImpar = []
    let listaFinal = []

    for(let i = 0; i < listaOrganizada.length; i++) {
        if(listaOrganizada[i] % 2 == 0){
            listaPar.push(listaOrganizada[i])
        } else {
            listaImpar.push(listaOrganizada[i])
        }
    }
    for(let i = 0; i < listaPar.length; i++ ) {
        listaFinal.push(listaPar[i])
    }
    for(let i = 0; i < listaImpar.length; i++ ) {
        listaFinal.push(listaImpar[i])
    }
    return listaFinal
}
console.log(paresImparesOrganizado([1,2,5,4,8,6,10,11,18,16])) // incompleto