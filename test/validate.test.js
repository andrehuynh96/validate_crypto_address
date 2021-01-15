const { validate } = require('../src/index');
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
chai.should();

let address = 'mxSb3XcRUURLthzA4GFvzyTu1jK5Uro4kS';
let platform = 'btc';
describe('Test btc get currency', function () {
  this.timeout(60000);

  it.only('Constructor', async () => {
    const isValid = validate(address,platform,'testnet');
    console.log('list currency must have',platform);
  });
})
