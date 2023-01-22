const menorNumero = (arrayComNumeros) => {
    const arrayOrganizada = arrayComNumeros.sort()
    return `O menor número do Array é o ${arrayOrganizada[0]}`
} 
console.log(menorNumero()) // Digite um Array dentro da Função