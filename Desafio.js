// historia do heroi inicial 
var xpInicial = 1
console.log(`O jovem heroí q saiu de sua cidade com um xp inicial de ${xpInicial} achou uma caverna magica e nessa caverna encontrou um elixir supremo de XP, tomou
esse elixir e se sentiu estranho e desmaiou. `)
for (var i = 1 ; i <= 200000 ; i += 100000 ){
    xpInicial += 100000 
}
// Desafio de classificação
var nomeDoHeroi = "Lucas Vieira Ferrari"
var definicao = ""
if(xpInicial === 1000){
    definicao = "Ferro"
}
else if (xpInicial >1.001 && xpInicial <=2.000){
    definicao = "Bronze"
}
else if (xpInicial >2.001 && xpInicial <=2.001){
    definicao = "Prata"
}
else if(xpInicial >6.000 && xpInicial <=7.000){
    definicao = "Ouro"
}
else if (xpInicial > 7.001 && xpInicial <=8.000){
    definicao = "Platina"
}
else if (xpInicial >8.001  && xpInicial <=9.000){
    definicao = "Ascendente"
}
else if (xpInicial >9.001  && xpInicial <=10.000){
    definicao = "Imortal"
}
else {
    definicao = "Radiante"
}
console.log(`O Herói de nome ${nomeDoHeroi} acordou, abriu sua hotbar e conferiu que estava na classificação de ${definicao}, percebendo assim que tinha recebido uma incrível quantidade de XP, parando assim no nível ${xpInicial}.`);
