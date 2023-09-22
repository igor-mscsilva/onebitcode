function register(element) {
  // Pegando os dados de cada input em html
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value
 //Se a senha foi igual a confirmação de senha
  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!")
  } else {
    alert("As senhas não conferem")
  }
}