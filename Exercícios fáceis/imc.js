const calculoImc = (peso, alturaEmCentimetros) => {

    if (typeof (peso, altura) == "number") {
        let alturaEmMetros = alturaEmCentimetros / 100
        return peso / Math.pow(alturaEmMetros, 2)

    } else {
        return "Um dos dois parâmetros não são numeros"

    }
}
console.log(calculoImc(81, 180)) // Digite um peso(kg) e uma altura(cm)