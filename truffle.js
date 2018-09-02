module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      from: '0xf466AfD8f155049Ac4086a881dCfF00ebB5c5d8a',
      network_id: 5777, // Match any network id
       gasPrice: 2000000000,   // <--- Twice as much
       gas: 6721975,   // <--- Twice as much
    }
  }
};
