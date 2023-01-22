function tabuada() {
    for(let i = 1; i <= 10; i++){
        console.log()
        console.log(`TABUADA DO ${i}`)
        console.log()
        for(let j = 1; j <= 10; j++){
            console.log(`${j} X ${i} = ${j * i}`)
            
        }
    }
}

tabuada()