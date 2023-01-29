const paresImpares = (lista, numero) => {
    let numeroDigitado = "Número não foi encontrado na 'Array'"
    for(let i = 0; i < lista.length; i++){
        if(lista[i] == numero) {
            numeroDigitado = numero
            if(numero % 2 == 0){
                return `${numero} é par`
            } else {
                return `${numero} é ímpar`
            }
        }   
    }
    if(numeroDigitado != numero){
        return numeroDigitado
    }
}
console.log(paresImpares()) // Digite dois parâmetros, uma Array e um número
console.log(paresImpares([0,2,4,5,778,43,23,45], 23)) // => 23 é impar
console.log(paresImpares([0,2,4,5,778,43,23,45], 778)) // => 778 é par
console.log(paresImpares([0,2,4,5,778,43,23,45], 3)) // => Número não encontrado na 'Array'
