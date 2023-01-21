/* 
    Crie uma função que retorne TRUE caso uma variavel x (int) é divisivel por y e z Senão, retorna FALSE
    A função deve receber 3 parametros inteiros x, y e z
*/

const divisivel = (x, y, z) => {
    if (((x % y) == 0) && ((x % z) == 0)) {
        return true
    } else {
        return false
    }

}
console.log(divisivel(13,4,5))