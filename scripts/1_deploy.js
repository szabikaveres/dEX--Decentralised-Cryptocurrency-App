
async function main() {
  console.log('Preparing deployment... \n')

    //Fetch contract to deploy
    const Token = await ethers.getContractFactory('Token')
    const Exchange = await ethers.getContractFactory('Exchange')

    //Fetch accounts
    const accounts = await ethers.getSigners()

    console.log('Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n')

    //Deploy contracts  Migration Script
    const dEX = await Token.deploy('Decentralised Exchange', 'dEX', '1000000')
    await dEX.deployed()
    console.log('dEX deployed to: ${dEX.address}')

    const mETH = await Token.deploy('mETH', 'mETH', '1000000')
    await mETH.deployed()
    console.log('mETH deployed to: ${mETH.address}')

    const mBTC = await Token.deploy('mBTC', 'mBTC', '1000000')
    await mBTC.deployed()
    console.log('mBTC deployed to: ${mBTC.address}')

    const exchange = await Exchange.deploy(accounts[1].address, 10)
    await exchange.deployed()
    console.log(`Exchange Deployed to: ${exchange.address}`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
