var username = getFirstName(`José Da silva Pereirinha` , ` `)
console.log(`Seja bem vindo ${username}`)
var username = getFirstName(`OTAVIO-SLA-MAIS-SLA-MAIS-SLA-MAIS-BLABLABLA` , `-`)
console.log(`Seja bem vindo ${username}`)

function getFirstName(name , splitchar ){
    var FirstName = name.split(splitchar)[0]
    return FirstName

}