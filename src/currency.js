const currencies = [
  { name: 'ethereum', symbol: 'eth' },
  { name: 'cosmos', symbol: 'atom' },
  { name: 'iris', symbol: 'iris' },
  { name: 'ontology', symbol: 'ont' },
  { name: 'ontology gas', symbol: 'ong' },
  { name: 'cardano', symbol: 'ada' },
  { name: 'bitcoin', symbol: 'btc' },
  { name: 'tether usd', symbol: 'usdt' },
  { name: 'bitcoin bash', symbol: 'bch' },
  { name: 'litecoin', symbol: 'ltc' },
  { name: 'dogecoin', symbol: 'doge' },
  { name: 'dash', symbol: 'dash' },
  { name: 'stellar', symbol: 'xlm' },
  { name: 'tron', symbol: 'trx' },
  { name: 'ethereum classic', symbol: 'etc' },
  { name: 'tomochain', symbol: 'tomo' },
  { name: 'eos', symbol: 'eos' },
  { name: 'tezos', symbol: 'xtz' },
  { name: 'neo', symbol: 'neo' },
  { name: 'harmony', symbol: 'one' },
  { name: 'v.systems', symbol: 'vsys' },
  { name: 'qtum', symbol: 'qtum' },
  { name: 'binance coin', symbol: 'bnb' },
  { name: 'gas', symbol: 'gas' },
  { name: 'centrality', symbol: 'cennz' },
  { name: 'quras', symbol: 'xqc' },
  { name: 'sylo', symbol: 'sylo' },
  { name: 'polkadot', symbol: 'dot' },
  { name: 'filecoin', symbol: 'fil' },
  { name: 'ton crystal', symbol: 'ton' }
];

module.exports = {
  getCurrencies: (currencyNameOrSymbol) => {
    const nameOrSymbol = currencyNameOrSymbol.toLowerCase();
    let result;
    currencies.forEach(item=> {
      if (item.name === nameOrSymbol || item.symbol === nameOrSymbol) {
        result = { ...item };
      }
    });

    return result;
  },
};

