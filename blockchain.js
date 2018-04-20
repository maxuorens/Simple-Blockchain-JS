//////////////////////////////////////////////////
// A simple example of creating a blockchain using JavaScript
//
//  to run use:
//   $ npm install  
//   $ node ./blockchain.js


const SHA256 = require( "js-sha256" )     // for hash checksum digest function SHA256


class Block {

  constructor(index, data, previousHash) {
    this.index        = index
    this.timestamp    = new Date()
    this.data         = data
    this.previousHash = previousHash
    this.hash         = this.calcHash()
  }

  calcHash() {
    var sha = SHA256.create()
    sha.update( this.index.toString() + this.timestamp.toString() + this.data + this.previousHash )
    return sha.hex()
  }

  static first( data="Genesis" ) {    // create genesis (first) block
    // uses index zero (0) and arbitrary previousHash ("0")
    return new Block( 0, data, "0" )
  }

  static next( previous, data="Transaction Data..." ) {
    return new Block( previous.index+1, data, previous.hash )
  }
}


//////
// let's get started
//   build a blockchain a block at a time

b0 = Block.first( "Genesis" )
b1 = Block.next( b0, "Transaction Data..." )
b2 = Block.next( b1, "Transaction Data......" )
b3 = Block.next( b2, "More Transaction Data..." )


blockchain = [b0, b1, b2, b3]

console.log( blockchain )
