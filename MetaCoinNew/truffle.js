const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config();
//const privKey = "bb951f4ab9c3665c69a187a3bf344b6b5ec0f9cc782de96132312011f92dec2b"; // raw private key
//console.log(process.env.PRIVATE_KEY);
var prov = new HDWalletProvider(process.env.MNEMONICS, "https://rinkeby.infura.io/PGeaCCgYpthSugPncips",0);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
solc: {
  optimizer: {
      enabled: true,
      runs: 200
    }
},
networks: {
  mainnet:{
    provider: new HDWalletProvider(process.env.MNEMONICS, "https://mainnet.infura.io/PGeaCCgYpthSugPncips",0),
    network_id: '1'
  },
  ropsten: {
    provider: new HDWalletProvider(process.env.MNEMONICS, "https://ropsten.infura.io/PGeaCCgYpthSugPncips",0),
    network_id: '3'
  },
  rinkeby: {
    provider: new HDWalletProvider(process.env.MNEMONICS, "https://rinkeby.infura.io/PGeaCCgYpthSugPncips",0),
    network_id: '4'
  },
  development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
	}
}
};
