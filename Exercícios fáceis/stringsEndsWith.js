/*
    Crie uma função que retorne TRUE caso o primeiro parametro(String) termine com o segundo parametro(String). Senão, retorna FALSE
*/

const stringsEndsWith = (palavra1, palavra2) => {
    if(typeof(palavra1,palavra2) == "string") {
        if(palavra1.substring(palavra1.length - palavra2.length) == palavra2) {
            return true
        } else {
            return false
        }
        
    } else{
        return "Algum parâmetro não é uma string"
    }
}
console.log(stringsEndsWith()) // Digite duas Strings
console.log(stringsEndsWith("carro","ro")) // true
console.log(stringsEndsWith("carro","ror")) // false

