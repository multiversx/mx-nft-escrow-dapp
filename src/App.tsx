import './App.css'
import {DappProvider} from "@multiversx/sdk-dapp/wrappers";

function App() {

  return (
      <DappProvider environment="devnet">
        Demo dApp
      </DappProvider>
  )
}

export default App
