const atacante = prompt("Qual é o nome do personagem atacante?")
const poderAtatque = prompt("Qual o seu poder de ataque?")

const defensor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = prompt("Quantos pontos de vida ele possui?")
const poderDeDefesa = prompt ("Qual o seu poder de defesa?")
const possuiEscudo = prompt("Ele possui escudo? (Sim/Não)")

let danoCausado = 0

if (poderAtatque > poderDeDefesa && possuiEscudo === "Não"){
    danoCausado = poderAtatque - poderDeDefesa
}else if (poderAtatque > poderDeDefesa && possuiEscudo === "Sim"){
    danoCausado = (poderAtatque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(`O ${atacante}, causou o dano ${danoCausado} pontos de dano em ${defensor}`)
alert(`${atacante}\nPodero de ataque: ${poderAtatque}\n
${defensor}\nPontos de vida: ${pontosDeVida}
Pontos de defesa: ${poderDeDefesa} \nPossui escudo: ${possuiEscudo}`)