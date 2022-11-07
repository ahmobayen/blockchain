require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
};

require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_GOERLI_HTTPS,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};