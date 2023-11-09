// historia do heroi inicial 
var perfil = {
    nomeDoHeroi : "Lucas Vieira Ferrari",
    definicao : "",
    xpInicial : 1
}
function descobrindoElixir(){
console.log(`O jovem heroí q saiu de sua cidade com um xp inicial de ${perfil.xpInicial} achou uma caverna magica e nessa caverna encontrou um elixir supremo de XP, tomou
esse elixir e se sentiu estranho e desmaiou. `)

for (var i = 1 ; i <= 200000 ; i += 100000 ){
    perfil.xpInicial += 100000 
}
}
// Desafio de classificação
function rank(){
if(perfil.xpInicial === 1000){
    definicao = "Ferro"
}
else if (perfil.xpInicial >1.001 && perfil.xpInicial <=2.000){
    definicao = "Bronze"
}
else if (perfil.xpInicial >2.001 && perfil.xpInicial <=6.001){
    definicao = "Prata"
}
else if(perfil.xpInicial >6.000 && perfil.xpInicial <=7.000){
    definicao = "Ouro"
}
else if (perfil.xpInicial > 7.001 && perfil.xpInicial <=8.000){
    definicao = "Platina"
}
else if (perfil.xpInicial >8.001  && perfil.xpInicial <=9.000){
    definicao = "Ascendente"
}
else if (perfil.xpInicial >9.001  && perfil.xpInicial <=10.000){
    definicao = "Imortal"
}
else {
    definicao = "Radiante"
}
}
function heroiAtual(){
console.log(`O Herói de nome ${perfil.nomeDoHeroi} acordou, abriu sua hotbar e conferiu que estava na classificação de ${definicao}, percebendo assim que tinha recebido uma incrível quantidade de XP, parando assim no nível ${perfil.xpInicial}.`);
}
descobrindoElixir()
rank()
heroiAtual()