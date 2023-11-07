function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    
    if (saldoVitorias <= 10) {
        return "Ferro";
    } else if (saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

var vitoria = 0;
var derrota = 0;

function win() {
    for (let i = 0; i < 50; i++) {
        vitoria++;
    }
}

function loose() {
    for (let i = 0; i < 20; i++) {
        derrota++;
    }
}

win();
loose();

var name = "Lucas Vieira Ferrari";
var rank = calcularNivel(vitoria, derrota);

console.log(`O heroi tem saldo de ${vitoria - derrota} e está no nível ${rank}`);
