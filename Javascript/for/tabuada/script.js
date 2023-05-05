let numero = prompt("Informe um numero para calcular o valor da tabuada: [1 a 20]")
numero = parseFloat(numero)

let resultado = ""

for(let i = 0 ; i <= 10; i++){
    resultado += numero + " * " + i + " = " + (numero * i) + "\n"
}

alert ("Resultado da tabuada de " + numero + "\n\n" + resultado)
