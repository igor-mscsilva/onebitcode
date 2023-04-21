const valor = prompt("Informe uma valor em metros: ")
const medida = prompt("Informe qual o valor da medida que será convertido: \n\n1° Milímetros (mm) \n2° Centímetro (cm) \n3° Decímetro (dm \n4° Decâmetro (dam) \n5° Hectômetro (hm) \n6° Quilômetro (km))")

switch(medida){
    case "mm", "1":
        alert(`O valor ${valor} em milímetros é : ` + valor * 1000 + " milímetros")
        break;
    case "cm", "2":
        alert(`O valor ${valor} em centímetro é : ` + valor * 100 + "cm")
         break; 
    case "dm", "3":
        alert(`O valor ${valor} em decímetro é : ` + valor * 10 + " decímetro")
        break;
    case "dam", "4":
        alert(`O valor ${valor} em decâmetro é : ` + valor / 10 + "decâmetro")
        break;
    case "hm", "5":
        alert(`O valor ${valor} em hectômetro é : ` + valor / 100 + "hectômetro")
        break;  
    case "km", "6":
        alert(`O valor ${valor} em quilômetro é : ` + valor / 1000 + "Km")
        break;
    default:
        alert("ERROR - Informe uma opção valida.")
       
}