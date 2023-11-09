var invoice = {
    name:  "lucas",
    age: 20,
    product: {
        0 : ["play5" , "5000" ],
        1 : ["tv 4k " , "2500"],
        3 : ["xbox Series" , "4500"],
    }
}
generateInvoice(invoice)
function generateInvoice(invoice) {
    console.log(`comprador é o ${invoice.name}`)
    console.log(`ele tem idade de ${invoice.age}`)
    console.log(`assinatura do cliente ___________`)
    for (var i in invoice.product) {{
        var [productName , productPrice] = invoice.product[i] 
            console.log(`-${productName} : R$ ${productPrice}`)
        }
    }

}