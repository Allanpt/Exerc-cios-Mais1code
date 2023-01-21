function gorjeta (valor,valorGorjeta) {
    let valorTotal = valor * (1 + (valorGorjeta/100))
    return valorTotal
}
console.log(gorjeta(100,13).toFixed(0))