// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      from: "0x8af4e86add853f9f82b124dc69db5bcb1f4ef047",
	  gas: 4700000
   }
  }
}