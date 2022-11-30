# Step By Step guid

# Features
- View All Tweets
- Delete Tweet By User
- Update Tweet By User
- Submit new Tweet By user


## Development Steps

- Development of a CRUD API in Solidity
- Unit Test for CRUD operations
- Deployment to Goerli
- Development of a front-end to interact with the smart contracts

## Project Requirment/Setup

### BackEnd dependency installation:
```shell
cd ./backend
npm install
```
### FrontEnd dependency installation:
required npm version 16.14.0

```shell
cd ./frontend
npm install
```
### Requirements
1. You need to create a virtual wallet [Metamask](https://metamask.io/) account and select "Goerli Test Network".
2. You have to create an account on [Alchemy](https://www.alchemy.com/) and generate an API key by creating an app. This will allow us to make requests to the Goerli Test Network. 
4. After cloning the repo and creating your accounts and generating the API key, now you have to create a `.env` same as [.env.example] and fill in your keys. my attribute is like this:
```shell
ALCHEMY_GOERLI_API = "{your Key}"
ALCHEMY_GOERLI_HTTPS = "https://eth-goerli.g.alchemy.com/v2/{your Key}"
ALCHEMY_GOERLI_WEBSOCKET = "wss://eth-goerli.g.alchemy.com/v2/{Your Key}"

ACCOUNT_KEY = "{your Key}"
```