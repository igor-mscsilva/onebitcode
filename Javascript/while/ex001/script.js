const nome = prompt("Informe o seu nome: ")
let visita = prompt("Você visitou alguma cidade ? [sim/não]")
let cidades = " "
let quantidade = 0


while(visita === "sim"){
    quantidade ++
   let cidade = prompt("Infome o nome da cidade visitada :")
    cidades += "-" + cidade + "\n"

    visita = prompt("Visitou mais alguma cidade ?[sim/não]")

}
 
    alert(`O turista: ${nome} \nCidades visitadas : ${quantidade} \nAs cidades foram:\n${cidades}`)


