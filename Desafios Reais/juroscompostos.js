const jurosCompostos = () => {
    let leia = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let valorInicial;
    let taxaDeJurosAnual;
    let aporteMensal;
    let períodoEmAnos;
    let contaDosJurosCompostos;

    leia.question(`Valor inicial: R$`,input =>{
        valorInicial = input;
        leia.question(`Taxa de juros Anual: `, input =>{
            taxaDeJurosAnual = input;
            leia.question(`Aporte Mensal: R$`, input =>{
                aporteMensal = input;
                leia.question(`Período(Em anos): `, input =>{
                    períodoEmAnos = input;
                    
                    contaDosJurosCompostos =  (valorInicial * ((1 + ((taxaDeJurosAnual/12) / 100)) ** (períodoEmAnos*12))) + (aporteMensal * (((((1 + ((taxaDeJurosAnual/12) / 100))) ** (períodoEmAnos*12)) - 1) / ((taxaDeJurosAnual/12) / 100)))
                    
                    console.log()
                    console.log(`Seu montante final será R$${contaDosJurosCompostos.toFixed(2)}`)
                    
                    leia.close()
                    console.log()
                    
                })
            })
        })
    })
}   
console.log(jurosCompostos())

