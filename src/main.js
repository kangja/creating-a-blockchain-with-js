const { Blockchain, Transaction } = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "ee3c4557319af9f750e509977d99c5f474ddd75dabb1d1de25b0a68418f3a228"
);
const myWalletAddress = myKey.getPublic("hex");

let kangCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
kangCoin.addTransaction(tx1);

console.log("\nStarting the miner...");
kangCoin.minePendingTransactions(myWalletAddress);

console.log(
  "\nBalance of josh is",
  kangCoin.getBalanceOfAddress(myWalletAddress)
);

kangCoin.chain[1].transactions[0].amount = 1;

console.log("is chain valid?", kangCoin.isChainValid());
