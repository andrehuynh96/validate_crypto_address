const currencies = require('./currency');
module.exports = {
  validate: (address, currencyNameOrSymbol,networkType) => {
    const currency = currencies.getCurrencies(currencyNameOrSymbol);
    if(!currency) {
      throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
    }
    console.log('Have validator' + currencyNameOrSymbol );
  },
};
