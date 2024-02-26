import './App.css'

import { Pendingamt } from './components/Pendingamt'
import { Amtprocessed } from './components/Amtprocessec'
import { Nextpayment } from './components/Nextpayment'

function App() {

  return (
    <div>
      <div className="grid grid-cols-4">
        <Nextpayment amt="92,312.20" ordernum="23" date="Today, 4:00PM"></Nextpayment>
        <Pendingamt amt="92,312.20" ordernum="13" />
        <Amtprocessed amt="23,92,312.19"></Amtprocessed>
      </div>
      <div></div>
    </div>

  )
}

export default App
