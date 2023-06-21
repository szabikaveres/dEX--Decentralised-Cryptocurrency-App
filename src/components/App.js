import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import config from '../config.json';

import { loadProvider, loadNetwork, loadAccount, loadToken } from '../store/interactions';

function App() {
  const dispatch = useDispatch()

  //fetch accounts from metamask and log it to console
  const loadBlockchainData = async () => {
await loadAccount(dispatch)

    //Connect Ethers to Blockchain
    const provider = loadProvider(dispatch)
    const chainId = await loadNetwork(provider, dispatch)
  

    //Talk to Token Smart Contract
    await loadToken(provider, config[chainId].dEX.address, dispatch )

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
