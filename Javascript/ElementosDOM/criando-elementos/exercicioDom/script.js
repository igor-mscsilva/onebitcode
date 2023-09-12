function addContact(){
    const contactSection = document.getElementById('contacts-list')
    //Criar a tag h3
    const h3 = document.createElement('h3')
    h3.innerText = "Contato "

    //Criar uma lista não ordernada
    const ul = document.createElement('ul')
    //
    const nameLI = document.createElement('li')
    nameLI.innerText = "Nome"
    //Campo para poder digitar o nome do contato
    const nameinput = document.createElement('input')
    nameinput.type = 'text'
    nameinput.name = 'fullname'
    nameLI.appendChild(nameinput)
    //Adionando a lista não ordenada
    ul.appendChild(nameLI)
    ul.appendChild(document.createElement('br'))

    const phoneLi = document.createElement('li')
    phoneLi.innerText = "Telefone"
    //Campo para poder digitar o nome do contato
    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'
    phoneLi.appendChild(phoneInput)
    //Adionando a lista não ordenada
    ul.appendChild(phoneLi)
    ul.appendChild(document.createElement('br'))
    
    const addressLi = document.createElement('li')
    //criando uma label
    addressLi. innerHTML = '<label for="address">Endereço: </label>'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    //adicionar a lista
    addressLi.appendChild(addressInput)
    //adicionar a lista não ordenada
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))


    
    //Adicionar varios elementos na tag section de uma vez só
    contactSection.append(h3 , ul)
    
}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')
    //removendo um nó desse elemento
    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}