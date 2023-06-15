import Image from 'next/image'
import './globals.css'
import Navbar from './components/Navbar'


import { InternalSymbolName } from 'typescript'
import Items from './components/items'

export default function Home() {
  return (
    <div className="p-7 bg-black">
      <div className="max-w-7xl">

        <Navbar />
      </div>
      <div className="text-white">
        <Items/>
      </div>

    </div>

  )
}
