// ====== Session Storage ========
// Session Storage, se fechar a pagina as informações gravadas são perdidas.

document.getElementById('sessionBtn').addEventListener('click', function() {
    const input = document.getElementById('sessionTxt')
    //Atribuir as informações digitadas e atribuir a variavel info
    window.sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function (){
    //Pegar as informações gravadas na variavel info e mostrar na tela
    const info = sessionStorage.getItem('info')
    alert('As informações digitadas fora : ' + info)
})


// ====== Local Storage ========
//Fica armazenado no navegador as informações mesmo fechado

document.getElementById('localBtn').addEventListener('click',function(){
    const input = document.getElementById('local')
    //Armazenar as informações
    window.localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function(){
    //Pegar as informações gravadas na variavel info e mostrar na tela
    const infoLocal = localStorage.getItem('text')
    alert('O texto gravado no local storage é : ' + infoLocal)
})


// ====== Cookies ========
//


document.getElementById('cookieBtn').addEventListener('click', function(){
    //pegando o input
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2024,9,9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    //pegando o input
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text==' + input.value + ';'
    const expiration = 'expires=' + new Date(2024,8,9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})