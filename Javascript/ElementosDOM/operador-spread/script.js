const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen']

console.log(towns)
console.log(...towns)
console.log(...towns[0]) // console.log(P, r, o, n)

const townsCopy = towns

//Remover o ultimo do array

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Juno') //adicionar

console.log({ towns, townsCopy})

const townsClone = [...towns]

townsClone.push('Aldebaran')

console.log({ towns, townsCopy, townsClone})

const townsObj = { ...towns }
const townsObjClone = { ...townsObj}

townsObjClone.test = "Test"

console.log({townsObj, townsObjClone})