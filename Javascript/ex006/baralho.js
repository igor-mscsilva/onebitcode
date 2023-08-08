const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho: " + baralho.length +
        "\n1°. Adicionar uma carta " +
        "\n2°. Puxar uma carta" + 
        "\n3°. Sair"
    )
    switch (opcao) {
        case "1":
            const newCard = prompt("Qual é a nova carta ?")
            baralho.push(newCard)
            break;
        case "2":
            const cardPull = baralho.pop()// remover no final do topo
            if (!cardPull){
                alert("Não há nenhuma carta no baralho")
            }else {
                alert("Você puxou um(a) " + cardPull)
            }
            break;
        case "3":
            alert("Saindo ...")
            break;
        default:
            alert("Opção inválida!")
    }
}while(opcao !== "3")

