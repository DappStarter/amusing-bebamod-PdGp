require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh spot toy note maze proof gesture hidden suit gaze'; 
let testAccounts = [
"0x851204800140aba20a2a999d4acd7191b7a6bdac4f28ee6ad0a0aac8dd1c8648",
"0x539a9969d05e8fb66210f6706cc65234972e599affc75b96b0f72c04fcf4fbb6",
"0xea1752b7735af2293d31b830265232d8a513a279502d6dca48549eb73d09d527",
"0x4aa52701e5dd03137b0173f4adb2e35f3cb7dcec79410687655135ec0bf8a32d",
"0x763de9e40c72dd113b2d70313a701b0487ca559c8a4197cff393622a02cacb80",
"0x95cb483ad2a713ab93832c00547dad00c41199720f96593d9721a3da44d13782",
"0x446e4402fb0a746cdcf42a411a71e2040983ae2b8f2b3725083eccbc7e16b29e",
"0xd3e2b45962ede9a60289e16e5f43c929e07680be9e95292eba6469a6b269bb51",
"0x7c00cceb1496af11e0b00e410a0bd9c0f5a966993132327c4cb33c95bd881e36",
"0xf52cdaad77f93518edbc4ddf485e78f6ddd9c518c79fa2ecf7787a48d514c992"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


