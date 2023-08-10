function calculateTip(event) {
    event.preventDefault(); //Não recarregar a pagina apos o evento
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfoPeople = document.getElementById('people').value;

    //Verificar se o campo não esta em branco
    if(bill == '' | serviceQual == 0){
        alert('Por favor, preencha os campos')
        return;
    }
    //Se for uma pessoa a palavra cada não ira aparecer na tela, se for ira aparecer
    if(numOfoPeople == "" | numOfoPeople <= 1 ){
        numOfoPeople = 1;
        document.getElementById('each').style.display = "none"
    }else{
        document.getElementById('each').style.display = "block"
    }
    //Soma do total 
    let total = (bill * serviceQual) / numOfoPeople;
    total = total.toFixed(2); //fixar 2 casas após a virgula
    document.getElementById('tip').innerHTML = total; // atribuir o valor total a id
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);