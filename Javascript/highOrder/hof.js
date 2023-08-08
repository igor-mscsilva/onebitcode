function calcular(a ,b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b) // somar (3 , 5)
}

function somar(x, y){
    console.log("Realizando uma soma.")
    return x + y
}

console.log(calcular (3 , 5 , somar)) // somar sem os "()",esta utilizando somente a função de somar e não o resultado.

calcular(8 , 4 , function (x, y){ // Utilizando função anonima.
    console.log("Realizando uma subtração.")
    return x - y
})

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

//for (let i = 0; i < lista.length; i++){
    //exibirElemento(lista[i], i , lista)
//}

lista.forEach(exibirElemento)// para cada item da lista, vai chamar a função exibir elemento.

lista.forEach(function (elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})