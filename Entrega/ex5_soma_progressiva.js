const query = require('synchronous-user-input')
let soma = 0
function conversao(soma) {

    for (let cont = 0; cont <= num; cont++) {
        soma = soma + cont
    }
    return soma
}

const num = query("Digite um número: ")

console.log(`A soma progressiva de ${num} é: ${conversao(soma)}`)