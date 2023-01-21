function maiorNumero(num1,num2) {
    if (num1 > num2) {
        return num1
    }
    else{
        return num2
    }
}
console.log(maiorNumero(5,5))

const maior = (n1,n2) => {
    if(n1 >n2) {
        return n1
    }
    else {
        return n2
    }
}

maior(10,5)
console.log(`O maior é ${maior(10,5)}`)