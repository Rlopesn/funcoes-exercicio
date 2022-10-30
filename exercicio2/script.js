
const somar = (num1, num2) => {
    const soma = num1 + num2
    return (`sua soma é: ${soma}`)
}
console.log(somar(12, 25))

const comparar = (num3, num4) => {
    const compara = num3 > num4
    return (`num3 é maior que num4 ? ${compara}`)
}
console.log(comparar(33, 35))


const numeroEPar = (num5) => {
    const numero = num5 % 2 === 0
    return (`numero é par ? ${numero}`)
}
console.log(numeroEPar(12))

const salarioBruto = (salario) => {
    const desconto = salario - ( salario * 0.1)
    return (`após desconto salario é de: ${desconto}`)

}
console.log(salarioBruto(2500))
