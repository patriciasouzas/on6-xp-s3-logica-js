const query = require('synchronous-user-input')
const milimetro = 0
function conversao(milimetro) {
    milimetro = (metro * 1000)
    return milimetro
}

const metro = query("Digite o comprimento em Metros: ")

console.log(`A conversão de ${metro}m para Milímetros é: ${conversao(milimetro)}mm`)