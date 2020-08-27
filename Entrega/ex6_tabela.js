const query = require('synchronous-user-input')
let total = 0

console.log("Lojas Quase Dois - Tabela de preços")

for (let cont = 1; cont <= 50; cont++) {
    total = 1.99 * cont
    console.log(cont, "- R$", total.toFixed(2))
}
