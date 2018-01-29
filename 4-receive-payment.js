const sdk = require('stellar-sdk')
const server = new sdk.Server('https://horizon-testnet.stellar.org')
const accountPK = 'GBTEBGQM6UEX7ZP4BOV5E4SALZ4AAHOZJVKXKQWQOHJBSEVY2EGC4FUN'

server.payments()
.forAccount(accountPK)
.stream({
  onmessage: (res) => {
    console.log(res)
  },
  onerror: (err) => {
    console.error(err)
  }
})