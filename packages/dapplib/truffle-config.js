require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture story rifle magic hospital great light army gaze'; 
let testAccounts = [
"0x068a327e2b1672a2d33981e084f36a77b3b49dc0b69ef50955c3a39a40129f72",
"0xb4b291551ca45c9363996e08aecb23fab426e90f701610def338125fe0ea2a76",
"0x6127afeac51ed48ef77675c93506b7d764ca5b2f651379e645a1195791b76d68",
"0xe8ac4c39f44bb142a64009833f843be8a4389811ac4513a798ccd962e368c05c",
"0x5baa32ac054f03bf188702d524627d53d83554919e8016ba14880ea691340ec7",
"0xcc1347d779109aa26573e9bd743c798f00a00602b7f9220d6bb9653caacf09c4",
"0xc8adf532e31d1d70677788fbfe99c14551ca89415cf9acac21429bb83d41e6d5",
"0x4c02baadea308951e278bef1fcc8595d1fe67e24212412dc56f51c1bde440f5a",
"0xbede36d9f51b6cb2fd21db8bab4050eff549b19e48478823ed53337462ef3417",
"0x0ec22cccaa97947f6993c3bce0033472bb8674125fa834a707514ee58e8ec389"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

