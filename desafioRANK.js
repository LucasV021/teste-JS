var saldo = {
    vitoria : 0,
    derrota : 0,
    saldoInicial : 0
}
function inicioDaJornada(){
    console.log(`O heroi começou o dia e ligou seu computador em busca do rank imortal com um saldo de ${saldo.saldoInicial}`)
}
function win() {
    for (let i = 0; i < 50 ; i++) {
        saldo.vitoria++
    }
}
function loose(){
    for (let i = 0; i < 20 ; i++) {
        saldo.derrota ++
        
    }
}
win()
loose()
var novoSaldo = {
    saldoInicial : saldo.vitoria - saldo.derrota,
    name : "Lucas Vieira Ferrari",
    rank : "",
}
function classificação(){
if (novoSaldo.saldoInicial<=10) {
    novoSaldo.rank= "ferro"
}
else if (novoSaldo.saldoInicial>10 && novoSaldo.saldoInicial<=20 ){
    novoSaldo.rank = "bronze"
}
else if (novoSaldo.saldoInicial>20 && novoSaldo.saldoInicial<=50) {
    novoSaldo.rank = "prata"
}
else if  (novoSaldo.saldoInicial>50 && novoSaldo.saldoInicial<=80){
    novoSaldo.rank = "ouro"
}
else if (novoSaldo.saldoInicial>80 && novoSaldo.saldoInicial <=90) {
    novoSaldo.rank = "diamante"
}
else if (novoSaldo.saldoInicial>90 && novoSaldo.saldoInicial<=100) {
    novoSaldo.rank = "lendario"
}
else{
    novoSaldo.rank = "imortal"
}
}
function fimDaJornada(){
    console.log(`O heroi tem de saldo ${novoSaldo.saldoInicial} ficando assim no nivel ${novoSaldo.rank} ao final do dia.`)
}
inicioDaJornada()
classificação()
fimDaJornada()