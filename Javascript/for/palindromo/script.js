const word = prompt("Digite um palavra, para consultarmos se ela é (PALINDROMO)")
let wordbackwards = ""

//mostrar a palavra ao contrario
for(let i = word.length - 1; i >= 0; i--){
    wordbackwards += word[i]
}

//Verificar se a palavra ao contrario é igual a palavra digitada e mostrar o resultado.

if(word === wordbackwards){
    alert(word + " é uma palíndromo !" )
}else{
    alert(word + " não é um palíndromo! \n\n"   +  word + " !== " + wordbackwards)
}

