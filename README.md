# A simple example of creating a blockchain using JavaScript

[![N|Solid](https://sdtimes.com/wp-content/uploads/2015/10/1030.sdt-node.png)](https://nodejs.org/en/)

A simple example of creating a blockchain using JavaScript and SHA-256 encryptions 

# How to run ?

Blockchain requires [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) to run.

```sh
$ npm install 
$ node blockchain.js
```  

# Console Output

```sh
[ Block {
    index: 0,
    timestamp: 2018-04-20T17:23:02.376Z,
    data: 'Genesis',
    previousHash: '0',
    hash: 'baf0138a4b55c8171adee4845e80b0027adf5bd58367d27617f44d9e9163075d' },
  Block {
    index: 1,
    timestamp: 2018-04-20T17:23:02.377Z,
    data: 'Transaction Data...',
    previousHash: 'baf0138a4b55c8171adee4845e80b0027adf5bd58367d27617f44d9e9163075d',
    hash: 'c9e6940a874f2e1e2b06290e90b44a8b9be43e11f0fa877399c75fbc183ac5b8' },
  Block {
    index: 2,
    timestamp: 2018-04-20T17:23:02.377Z,
    data: 'Transaction Data......',
    previousHash: 'c9e6940a874f2e1e2b06290e90b44a8b9be43e11f0fa877399c75fbc183ac5b8',
    hash: '226ac299a7cf2fdb10f388d4181f40151a8ff9182cccfad495de06ac7580c10f' },
  Block {
    index: 3,
    timestamp: 2018-04-20T17:23:02.377Z,
    data: 'More Transaction Data...',
    previousHash: '226ac299a7cf2fdb10f388d4181f40151a8ff9182cccfad495de06ac7580c10f',
    hash: '59e27e0e3acd10e853d08bffbf9ed58f9e0351b8a5c39b2b0e2b48f0f84b1caa' } ]
	
```

