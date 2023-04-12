const nome = prompt("Informe o seu nome:")
const sobrenome = prompt("Informe o sobrenome :")
const curso = prompt("Qual é o campo de estudo do recruta ?")
const anoNascimento = prompt("Informe o seu ano de nascimento: ")

alert("Recruta cadastrado com sucesso! ;) \n" +
    "Nome completo: "+ nome +" " + sobrenome +
    "\nCampo de estudo: " + curso +
    "\nIdade: " + (2023 - anoNascimento) // a  \n pula de linha
)


