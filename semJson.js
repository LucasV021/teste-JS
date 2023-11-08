// SEM JSON
var name = `lucas`
var age = 20
var product = ["mouse" , "teclado" , "fone "]
var productValues =["20" , "30" , "40"] 

generateInvoice(name , product , age , productValues)
function generateInvoice(name , product , age , productValues ) {
    console.log(`o comprador é ${name}`)
    console.log(`o valor do produto é ${productValues[1]}`)
    console.log(`o produto é ${product[1]}`)
    console.log(`eu tenho ${age} de idade`)
    
}