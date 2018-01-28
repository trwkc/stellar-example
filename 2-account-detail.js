const sdk = require('stellar-sdk')
const server = new sdk.Server('https://horizon-testnet.stellar.org')

// public key
const pk = 'GBTEBGQM6UEX7ZP4BOV5E4SALZ4AAHOZJVKXKQWQOHJBSEVY2EGC4FUN'

server.loadAccount(pk)
.then((account) => {
  console.log(account.account_id)
  console.log(account.balances)
})
.catch((error)=>{
  console.error(error)
})