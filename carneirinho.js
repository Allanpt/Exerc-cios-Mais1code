const carneirinho = (quantidadeCarneirinho) => {

    if (typeof quantidadeCarneirinho == "number") {
        return (quantidadeCarneirinho) + " carneirinho..."
    }
    else {
        return "Isso não é um número"
    }
}
console.log(carneirinho(2))
