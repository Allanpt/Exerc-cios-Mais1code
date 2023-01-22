/* 
Dado uma variável mes (int) que representa o número de um mês entre 1 a 12 sendo, 1=Janeiro e 12=Dezembro, retorne em qual trimestre aquele mes se encontra.

1 = 1o trimestre (Janeiro, Fevereiro, Março)

2 = 2o trimestre (Abril, Maio, Junho)

3 = 3o trimestre (Julho, Agosto, Setembro)

4 = 4o trimestre (Outubro, Novembro, Dezembro)
*/
const trimestre = (mes) => {

    const mesesDoAno = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']

    let numeroDoTrimestre = 0

    if(mes < 4){
        numeroDoTrimestre = 1
    } else if(mes < 7){
        numeroDoTrimestre = 2
    } else if(mes < 10){
        numeroDoTrimestre = 3
    } else {
        numeroDoTrimestre = 4
    }

    return `${mesesDoAno[mes - 1]} é do ${numeroDoTrimestre}° trimestre`
}

console.log(trimestre()) // Digite um numero correspondente ao mês do ano