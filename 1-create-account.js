const sdk = require('stellar-sdk')
const rp = require('request-promise')
const pair = sdk.Keypair
// 1.
// Account ID: GBTEBGQM6UEX7ZP4BOV5E4SALZ4AAHOZJVKXKQWQOHJBSEVY2EGC4FUN
// Secret: SCODFVCDGLIO6GF5U2YSQOSJQ2APAWSQD5FEYK5XDLOWCJIX2RWEDRZP
// 2.
// Account ID: GD5GZWLAG7DHL7TO27PZJT7KMRJJRVVGPEONRJKDJPUBXB3GKGIWL6JP
// Secret: SACZT466I7F3ZSGMERP5NXYFQLBSFGIVVHM2WJ7P32VJUON4D4ZSFVED
const newAccount = pair.random()
console.log('New key pair created!')
console.log('  Account ID: ' + newAccount.publicKey())
console.log('  Secret: '+ newAccount.secret())

rp({
  uri: 'https://horizon-testnet.stellar.org/friendbot',
  qs: { addr: newAccount.publicKey() },
  json: true
})
.then((resp) => {
  console.log(resp)
})
.catch((err) => {
  console.error(err)
})





