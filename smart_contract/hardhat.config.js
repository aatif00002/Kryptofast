
require("@nomiclabs/hardhat-waffle");


module.exports={
  solidity:'0.8.0',
  networks:{
    Goerli:{
      url:'https://eth-goerli.g.alchemy.com/v2/MwdKRQ9mfvT5-aUdDTJngJgzjVzD5QRQ',
      accounts:['d727aca8941cda3a43928511b7c48a6accfdcd6a7421faabadfe83b37c0a1a70']
    }
  }
}