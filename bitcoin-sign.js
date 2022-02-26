var bitcoin = require('bitcoinjs-lib') // v4.x.x
var bitcoinMessage = require('bitcoinjs-message')

const myArgs = process.argv.slice(2);
// first arg is private key - in bitcoin core - do "dumpprivkey recv_address"
// second arg is message

const network = bitcoin.networks.testnet
const keyPair = new bitcoin.ECPair.fromWIF(myArgs[0], network)
const privateKey = keyPair.privateKey
var message = myArgs[1]

var signature = bitcoinMessage.sign(message, privateKey, keyPair.compressed)
console.log("private key: ",keyPair.privateKey.toString('hex'))
console.log("public key: ", keyPair.publicKey.toString('hex'))

const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey })
console.log("address: ", address)

console.log(signature.toString('base64'))