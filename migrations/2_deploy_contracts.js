const Election = artifacts.require("./Election.sol");

module.exports = async function(deployer) {
   deployer.deploy(Election);
  // const election = await Election.deployed()
 

};
