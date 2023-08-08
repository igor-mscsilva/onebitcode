let fila = []
let opcao = ""

do{
    let pacientes = ""
    for(let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "° - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + pacientes + 
        "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
    )
    switch (opcao){
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)// adicionando novo paciente
            break;
        case "2":
            if (fila.length > 0){
                const pacienteConsultado =   fila.shift();//Remover o primeiro paciente
                alert(pacienteConsultado + " Foi removido da fila")
            }else{
                alert("!! AVISO !! - Não há paciente na fila")
            }
            break;
        case "3":
            alert("Encerrando...")
            break;
        default:
            alert("Opção INVÁLIDA")
    }

}while(opcao !== "3" )