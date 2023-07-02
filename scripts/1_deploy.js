async function main() {
  console.log('Preparing deployment... \n')

    //Fetch contract to deploy
    const Token = await ethers.getContractFactory('Token')
    const Exchange = await ethers.getContractFactory('Exchange')

    //Fetch accounts
    const accounts = await ethers.getSigners()

    console.log(`Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`)

    //Deploy contracts  Migration Script
    const dex = await Token.deploy('Decentralised Exchange', 'dEX', '1000000')
    await dex.deployed()
    console.log(`dEX deployed to: ${dex.address}`)

    const mETH = await Token.deploy('mETH', 'mETH', '1000000')
    await mETH.deployed()
    console.log(`mETH deployed to: ${mETH.address}`)

    const mBTC = await Token.deploy('mBTC', 'mBTC', '1000000')
    await mBTC.deployed()
    console.log(`mBTC deployed to: ${mBTC.address}`)

    const exchange = await Exchange.deploy(accounts[1].address, 10)
    await exchange.deployed()
    console.log(`Exchange Deployed to: ${exchange.address}`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// deploys the Token and Exchange contracts to the blockchain network, initializes them with certain parameters, and logs the addresses of the deployed contracts.