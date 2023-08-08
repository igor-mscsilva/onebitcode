const imoveis = []
let opcao = ""

do{

    opcao = prompt("------------------------------------------\n* Bem-Vindo ao cadastro de imoveis *\n------------------------------------------\nTotal de imoveis: " + imoveis.length + "\n\nEscolha uma opção:\n1°. Novo imóvel\n2°. Listar imóveis\n3°. Sair")

    switch (opcao){
        case "1":
            const imovel = {}//criado o objeto.

            imovel.proprietario = prompt("Informe o nome do proprietario do imóvel: ")
            imovel.quartos = prompt("Quantos quartos possui o imóvel?")
            imovel.banheiros = prompt("Quantos banheiros possui o imóvel? ")
            imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")
            //Chanela de confirmação sim ou não salvar
            const confirmacao = confirm("Salvar este imóvel?\n" + "\nProprietario: " + imovel.proprietario +
            "\nQuartos: " + imovel.quartos +
            "\nBanheiros: " + imovel.banheiros +
            "\nPossui garagem ? " + imovel.garagem
            )
            if(confirmacao){
                imoveis.push(imovel)//acrecentar o imovel na lista
                alert("Salvando o imóvel...")
            }else {
                alert("Voltando ao menu ...")
            }
            
            break;
        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imovel " + (i + 1) +
                    "\nProprietario: " + imoveis[i].proprietario +
                    "\nQuartos:" + imoveis[i].quartos +
                    "\nBanheiro " + imoveis[i].banheiros + 
                    "\nPossui garagem? " + imoveis[i].garagem
                )
            }
            break;
        case "3":
            break;
        default:
            alert(" ERROR , opção inválida!")
    }

}while (opcao !== "3") // enquanto for diferente de 3 sair.