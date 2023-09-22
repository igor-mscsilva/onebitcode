function register(ev){
    //EV - evento que foi disparado
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation){
        alert("Usuário " + username + " Registrado")

    }else{
        alert("As senhas não conferem!")
    }
}


const button = document.getElementById('register-button')
//Adicionar um evento no botão
//click - tipo de evento
//function() - função de call back

button.addEventListener('click', register)

function removeListener(){
    //remover evento do botão que seja do tipo click e função register
    button.removeEventListener('click', register)
}

button.addEventListener('mouseover', function (ev){
    console.log(ev.currentTarget) // mostrar o botão
})