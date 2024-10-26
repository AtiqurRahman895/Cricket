import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer-Component/Footer'
import Header from './Header-Component/header'
import Hero from './HomePage-Component/Hero'
import Players from './HomePage-Component/Players'
import { toast } from 'react-toastify'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  const [coins, setCoins] = useState(0)
  const [allPlayers, setAllPlayers] = useState([])

  const changeCoinAmount=(amount,operation)=>{
    
    if(operation=="sub"){
      setCoins(coins - amount)
    }else{
      setCoins(coins + amount)
      toast.success(`${amount} coins are added`)
    }
    
  }

  const fetchAllPlayers=async ()=>{
    try {
      let res = await fetch('./data/players.json')
      let data = await res.json()
      setAllPlayers(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(()=>{
    fetchAllPlayers()
  },[])

  return(
    <>
      <Header coins={coins}/>
      <Hero changeCoinAmount={changeCoinAmount}/>
      <Players allPlayers={allPlayers} coins={coins} changeCoinAmount={changeCoinAmount}/>
      <Footer/>
    </>
  )

}

export default App
