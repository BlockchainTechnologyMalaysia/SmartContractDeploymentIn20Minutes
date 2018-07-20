const HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONICS=""remain drip sunset throw harbor security off capital mesh clump coach inner""

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
networks: {
  rinkeby: {
    provider: new HDWalletProvider(MNEMONICS, "https://rinkeby.infura.io/PGeaCCgYpthSugPncips",0),
    network_id: '4'
  }
}
};
