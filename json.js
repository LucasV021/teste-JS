// AGR COM JSON, usando o for in para percorrer os itens
var invoice = {
    name : `lucas`,
    age : 20,
    product : {
     0 :  [ "mouse" ,"20" , "pessima" ] ,
     1 :  ["teclado" , "30" , "boa "] ,
     2 :  [ "fone" , "40" , "ruim"],
     3 :  ["TV" , "9092" , "ok"]
    }
    }
     
generateInvoice(invoice)
function generateInvoice(invoice) {
    console.log(`o comprador é ${invoice.name}`)
    console.log(`eu tenho ${invoice.age} de idade`)
    console.log(`------------------`)
    for (var i in invoice.product) { {
         var [productName , productPrice , productAvaliação] = invoice.product[i];
         console.log(`- ${productName} : R$ ${productPrice} , ${productAvaliação}`)
            
        }
    }
}