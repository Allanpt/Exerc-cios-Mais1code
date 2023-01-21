const carneirinho = (quantidadeCarneirinho) => {
    let frase = ""
    if (typeof quantidadeCarneirinho == "number") {
        for(let i = 1; i <= quantidadeCarneirinho; i++) {
            frase += `${i} carneirinho... `
            
    }}
    else {
        return "Isso não é um número"
    }
    return frase
}
console.log(carneirinho(9))
