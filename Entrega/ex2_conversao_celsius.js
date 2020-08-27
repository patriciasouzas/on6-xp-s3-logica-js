const query = require('synchronous-user-input')
const celsius = 0

function conversao(celsius) {
    celsius = ((fahrenheit - 32) * 5) / 9
    return celsius
}

const fahrenheit = query("Digite a temperatura em Fahrenheit: ")

console.log(`A conversão de ${fahrenheit} Fahrenheit para Celsius é:`, conversao(celsius).toFixed(2))