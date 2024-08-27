const{ Web3 }= require('web3');

// Use the custom hostname for your Ganache RPC URL
const web3 = new Web3('http://my-blckch.local:30000');

async function getAccounts() {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Accounts:', accounts);
    } catch (error) {
        console.error('Error fetching accounts:', error);
    }
}
web3.eth.getChainId().then(console.log);
const chainId = parseInt('1337n', 10); // Convert from string with suffix to number
console.log(chainId);
getAccounts();
web3.eth.getChainId().then(chainId => {
    console.log('Chain ID:', chainId);
}).catch(error => {
    console.error('Error getting chain ID:', error);
});

// Example function to interact with the blockchain
async function checkNetwork() {
    try {
        const networkId = await web3.eth.net.getId();
        console.log('Network ID:', networkId);

        const chainId = await web3.eth.getChainId();
        console.log('Chain ID:', chainId);

        
    } catch (error) {
        console.error('Error checking network:', error);
    }
}

checkNetwork();