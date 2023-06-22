import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import config from '../config.json';

import { 
  loadProvider, 
  loadNetwork, 
  loadAccount, 
  loadTokens,
  loadExchange
} from '../store/interactions';

function App() {
  const dispatch = useDispatch()

  //fetch accounts from metamask and log it to console
  const loadBlockchainData = async () => {

  //Connect Ethers to Blockchain
  const provider = loadProvider(dispatch)

  //Fetch current network's chainId(e.g : hardhat 31337, kovan : 42)
  const chainId = await loadNetwork(provider, dispatch)
  
  //Fetch current account & balance from Metamask
  await loadAccount(provider, dispatch)

  //Load Token Smart Contracts
  const dEX = config[chainId].dEX
  const mETH = config[chainId].mETH
  await loadTokens(provider, [dEX.address, mETH.address], dispatch )

  //Load Exchange Smart Contract
  const exchangeConfig = config[chainId].exchange
  await loadExchange(provider, exchangeConfig.address, dispatch)  

  }

  useEffect( () => {
    loadBlockchainData()
  })

  return (
    <div>

      {/* Navbar */}

      <main className='exchange grid'>
        <section className='exchange__section--left grid'>

          {/* Markets */}

          {/* Balance */}

          {/* Order */}

        </section>
        <section className='exchange__section--right grid'>

          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}

        </section>
      </main>

      {/* Alert */}

    </div>
  );
}

export default App;
