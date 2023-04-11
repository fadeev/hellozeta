require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: '0.8.18',
    networks: {
        athens: {
            accounts: [process.env.PRIVATE_KEY],
            gas: 5000000,
            gasPrice: 8000000000,
            url: 'https://api.athens2.zetachain.com/evm'
        }
    }
};
