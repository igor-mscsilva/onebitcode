const entrada1 = prompt("Informe o primeiro valor: ")
const entrada2 = prompt("Informe o segundo valor: ")
const operacao = prompt("Qual operação deseja fazer ? \n" + 
    "\nSoma = +" +
    "\nSubtração = -" +
    "\nMultiplicação = *" + 
    "\nDivisão = /"
)
    const n1 = parseFloat(entrada1)
    const n2 = parseFloat(entrada2)
    const soma = n1 + n2
    const subtracao = n1 - n2
    const multiplicacao = n1 * n2
    const divisao = n1 / n2

    alert(
        "Resultado:\n" +
        "\nSoma: "+ soma +
        "\nSubtração: " + subtracao +
        "\nMultiplicacao: " + multiplicacao + 
        "\nDivisão: " + divisao 
    )
if( n1 === ""){
    alert("ERRO! - Informe o primeiro numero")
    return;

}else if (n2 === ""){
    alert("ERRO! - Informe o segundo numero")
}