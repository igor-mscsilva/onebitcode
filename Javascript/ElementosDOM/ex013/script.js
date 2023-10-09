//Atribuindo o tema claro no btn do html
function useLightTheme(){
 document.body.style.color = '#212529'
 document.body.style.backgroundColor = '#f1f5f9'
}
//Atribuindo o tema escuro no btn do html
function useDarkTheme(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}
// Função de trocar de tema, toogle = alternar
function switchTheme (){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

//Pegando o id de cada botão e atribuindo a função em cada botão
document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click' , useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)