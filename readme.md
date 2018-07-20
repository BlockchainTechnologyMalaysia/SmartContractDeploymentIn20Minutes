#SMART CONTRACT DEPLOYMENT LINUX/UNIX DEMO

To deploy a new Smart Contract in Ethereum you have to follow the steps below:

    1.  Install Prerequisites:
        Install Nodejs and NPM.
        In LINUX/UNIX :
```
> sudo apt-get node
```
                       Cross Check
```
> node -v
> npm -v
````
     B.   Install Truffle Smart Contract Development package
                       On your system create a new working directory  and navigate to it on your cmd.
                       Test if the nvm and npm is correctly installed by typing node -v and npm -v   
                       respectively.
                    ###   Install truffle globally using the command
``` > npm install -g truffle    
```                    
      C. Install HDWallet Package     https://www.npmjs.com/package/truffle-hdwallet-provider-privkey

         2. Create infura rpc provider from the official website www.infura.io
                 Create your account at infura by entering email and choosing a password.

         3. Unbox the Metacoin project in your working directory using the command below:
> truffle unbox metacoin
         4. Install Metamask extension on your Internet Browser and create a new account.
               Search for the extension on google. “Metamask Extension” or at https://metamask.io/
               Request testnet ether from a rinkeby faucet https://faucet.rinkeby.io/

         5. Export your Private Key from the metamask wallet and copy it somewhere.

         6. Navigate to the file named truffle.js and open it on your text editor     
               Paste the following code:


``` const HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONICS="your mnemonics"

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
```
Reset the privKey to the specific Private Key exported from Metamask.

7. Initialize node modules
    On your working folder type the command:
    ```
    npm install truffle-hdwallet-provider-privkey
```
8. Open Cmd and navigate to your working directory to compile and deploy your code.
    For compiling use command:
```
     truffle console --network rinkeby
```
    For deployment use Commands:
```
       > compile
       > migrate --reset
       // Copy the smart contract address somewhere
```
      
9. To interact with your smart contract execute the command below :

```
    > metaCoin.deployed().then(function(instance){token=instance})
    > token.getBalance("0xcD6ED2D088BD03441F3b00bE581c7f599675279c").then(function(res){bal=res})
        // token.getBalance("<your address>").then(function(res){bal=res})
    > bal.toNumber()
        //to send tokens to other smart contract
    > token.sendCoin("0x37f90f9BE74C6Af83e2eFA6A918ca5D38eB655e4",100)
        // token.sendCoin("<address of receiver>",<amount>)
        // Check balance of above mentioned address
```
