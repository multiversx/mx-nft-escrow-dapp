import './App.css'
import {DappProvider} from "@multiversx/sdk-dapp/wrappers";
import {ENVIRONMENT} from "config";

function App() {

  return (
      <DappProvider environment={ENVIRONMENT}>
        Demo dApp
      </DappProvider>
  )
}

export default App
