const abrevia = (nomes) => {
    const nomesSeparados = nomes.split(" ")
    let abreviacoes = ""
    for(let i = 0; i < nomesSeparados.length; i++) {
        let letrasSeparada = nomesSeparados[i].split("")
        abreviacoes += letrasSeparada[0] + "."
    }
    return abreviacoes
}

console.log(abrevia("Allan Paixão"))


