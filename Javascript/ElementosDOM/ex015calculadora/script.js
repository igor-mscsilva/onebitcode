const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
//Teclas que serão aceita neste array
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

//Pegando toda a classe charKey e habilitando os botões
document.querySelectorAll('.charKey').forEach(function(charKeyBtn) {
    //Cada botão adicionado o evento de click
    charKeyBtn.addEventListener('click', function(){
        //Atribuir a variavel o valor de cada botão pressionado
        const valueBtn = charKeyBtn.dataset.value
        input.value += valueBtn
    })
})

//Botão Limpar
document.getElementById('clear').addEventListener('click', function(){
    resultInput.value = ''
    resultInput.classList.remove('error')
    input.value = ''
    //Após apagar focar no input o cursor
    input.focus()
})


input.addEventListener("keydown", function (ev) {
    //ev.prev - previnir o comportamento padrao
    ev.preventDefault()
    //Se a tecla pressionada estiver inclusa nas teclas validas do array
    //ev.key - tecla que o user precionou
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    //Botão excluir do teclado
    if(ev.key === 'Backspace' ){
        input.value = input.value.slice(0, -1)
    }
    if(ev.key === 'Enter'){
        calculate ()
    }
})

//Botão calcular
document.getElementById('equal').addEventListener('click', calculate)

function calculate(){
    //Tratamento de erro
    resultInput.value = 'ERROR'
    resultInput.classList.add('error')
    //eval pegou as informações do input e analisou
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove('error')
}

//Trocar o tema

document.getElementById('themeSwitcher').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    }else{
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

//Botão copy

document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget
    if(button.innerText === 'Copy'){
        //Mudar o texto do botao
        button.innerText = 'Copied!'
        //Adicionar uma classe de estilo do css
        button.classList.add('success')
        //Copiar o texto para a area de transferencia
        window.navigator.clipboard.writeText(resultInput.value)
    }else {
        button.innerText = 'Copy'
        button.classList.remove('sucess')
    }
})