const sdk = require('stellar-sdk')
sdk.Network.useTestNetwork()
const server = new sdk.Server('https://horizon-testnet.stellar.org')
const senderPK = 'GBTEBGQM6UEX7ZP4BOV5E4SALZ4AAHOZJVKXKQWQOHJBSEVY2EGC4FUN'
const senderSC = 'SCODFVCDGLIO6GF5U2YSQOSJQ2APAWSQD5FEYK5XDLOWCJIX2RWEDRZP'
const sourceKey = sdk.Keypair.fromSecret(senderSC)
const receiverPK = 'GD5GZWLAG7DHL7TO27PZJT7KMRJJRVVGPEONRJKDJPUBXB3GKGIWL6JP'

server.loadAccount(senderPK)
.then((account)=>{
  const transaction = new sdk.TransactionBuilder(account)
  .addOperation(sdk.Operation.payment({
    destination: receiverPK,
    asset: sdk.Asset.native(),
    amount: "10" // 10 XLM
  }))
  .build()

  transaction.sign(sourceKey)
  return server.submitTransaction(transaction)
})
.then(function (result) {
  console.log('Success! Results:', result)
})
.catch(function (error) {
  console.error('Something went wrong!', error)
});

