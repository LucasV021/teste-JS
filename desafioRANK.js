var vitoria = 0
var derrota = 0
var saldoInicial = 0
console.log(`O heroi começou o dia e ligou seu computador em busca do rank imortal com um saldo de ${saldoInicial}`)
function win() {
    for (let i = 0; i < 50 ; i++) {
        vitoria++
    }
}
function loose(){
    for (let i = 0; i < 20 ; i++) {
        derrota ++
        
    }
}
win()
loose()

var saldoInicial = vitoria - derrota
var name = "Lucas Vieira Ferrari"
var rank = ""
if (saldoInicial<=10) {
    rank= "ferro"
}
else if (saldoInicial>10 && saldoInicial<=20 ){
    rank = "bronze"
}
else if (saldoInicial>20 && saldoInicial<=50) {
    rank = "prata"
}
else if  (saldoInicial>50 && saldoInicial<=80){
    rank = "ouro"
}
else if (saldoInicial>80 && saldoInicial <=90) {
    rank = "diamente"
}
else if (saldoInicial>90 && saldoInicial<=100) {
    rank = "lendario"
}
else{
    rank = "imortal"
}
console.log(`O heroi tem de saldo ${saldoInicial} ficando assim no nivel ${rank} ao final do dia.`)