const { Blockchain, Transaction } = require("./blockchain");

let kangCoin = new Blockchain();
kangCoin.createTransaction(new Transaction("address1", "address2", 100));
kangCoin.createTransaction(new Transaction("address2", "address1", 50));

console.log("\nStarting the miner...");
kangCoin.minePendingTransactions("josh-address");

console.log(
  "\nBalance of josh is",
  kangCoin.getBalanceOfAddress("josh-address")
);

console.log("\nStarting the miner again...");
kangCoin.minePendingTransactions("josh-address");

console.log(
  "\nBalance of josh is",
  kangCoin.getBalanceOfAddress("josh-address")
);
