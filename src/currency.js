const currencies = [
  { name: 'Ethereum', symbol: 'eth' },
  { name: 'Cosmos', symbol: 'atom' },
  { name: 'Iris', symbol: 'iris' },
  { name: 'Ontology', symbol: 'ont' },
  { name: 'Ontology Gas', symbol: 'ong' },
  { name: 'Cardano', symbol: 'ada' },
  { name: 'Bitcoin', symbol: 'btc' },
  { name: 'Tether USD', symbol: 'usdt' },
  { name: 'Bitcoin Cash', symbol: 'bch' },
  { name: 'Litecoin', symbol: 'ltc' },
  { name: 'Dogecoin', symbol: 'doge' },
  { name: 'Dash', symbol: 'dash' },
  { name: 'Stellar', symbol: 'xlm' },
  { name: 'TRON', symbol: 'trx' },
  { name: 'Ethereum Classic', symbol: 'etc' },
  { name: 'TomoChain', symbol: 'tomo' },
  { name: 'EOS', symbol: 'eos' },
  { name: 'Tezos', symbol: 'xtz' },
  { name: 'NEO', symbol: 'neo' },
  { name: 'Harmony', symbol: 'one' },
  { name: 'V.systems', symbol: 'vsys' },
  { name: 'Qtum', symbol: 'qtum' },
  { name: 'Binance Coin', symbol: 'bnb' },
  { name: 'Gas', symbol: 'gas' },
  { name: 'Centrality', symbol: 'cennz' },
  { name: 'Quras', symbol: 'xqc' },
  { name: 'Sylo', symbol: 'sylo' },
  { name: 'Polkadot', symbol: 'dot' },
  { name: 'Filecoin', symbol: 'fil' },
  { name: 'TON Crystal', symbol: 'ton' }
];

module.exports = {
  getCurrencies: (currencyNameOrSymbol) => {
    const nameOrSymbol = currencyNameOrSymbol.toLowerCase();

    currencies.forEach(item=> {
      if (item.name === nameOrSymbol || item.symbol === nameOrSymbol) {
        return item;
      }
    });

    return null;
  },
};

