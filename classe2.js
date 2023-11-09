class formaDeBolo{
    constructor(saborDaMassa , saborDoRecheio, preco){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
        this.preco = preco
    }
    escrever(){
        console.log(`eu quero bolo ${this.saborDaMassa} com recheio de ${this.saborDoRecheio} o valor é : ${this.preco}`)
    }

    }

var boloFesta = new formaDeBolo (`massa de chocolate` , `nutella`, `R$ 100`)
var boloDeMerda = new formaDeBolo(`massa de coco`,`merda`, `R$ 50`)
boloFesta.escrever()
boloDeMerda.escrever()