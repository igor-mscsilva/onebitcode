const car1 = prompt("Informe o nome do primeiro veículo:  ")
const vel01 = prompt("Informe a Velocidade do primeiro veículo: ")
const car2 = prompt("Informe o nome do segundo veículo:  ")
const vel02 = prompt("Informe a Velocidade do segundo veículo: ")

if (vel01 > vel02){
    alert(`O veículo ${car1} é mais rapido com a velocidade de ${vel01}`)
} else if (vel02 > vel01) {
    alert(`O veículo ${car2} é mais rapido com a velocidade de ${vel02}`)
} else if (vel01 == vel02){
    alert("Ambas velocidades são iguais!")
}