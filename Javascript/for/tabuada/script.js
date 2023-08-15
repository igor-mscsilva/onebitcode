let numero = prompt(
        "Olá, eu sou o Robô da Tabuada!\n" + 
        "Informe um numero para calcular o valor da tabuada:"
    )
numero = parseFloat(numero)

let resultado = ""

for(let fator = 0 ; fator <= 10; fator++){
    resultado += numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert ("Resultado da tabuada de " + numero + "\n\n" + resultado)
