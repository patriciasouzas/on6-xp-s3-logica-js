const query = require('synchronous-user-input')
const fahrenheit = 0

function conversao(fahrenheit) {
    fahrenheit = ((celsius * 9) / 5) + 32
    return fahrenheit
}

const celsius = query("Digite a temperatura em Celsius: ")

console.log(`A conversão de ${celsius} Celsius para Fahrenheit é:`, conversao(fahrenheit))