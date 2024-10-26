// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer-Component/Footer'
import Header from './Header-Component/header'
import Hero from './HomePage-Component/Hero'
import Players from './HomePage-Component/Players'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {
  // const [count, setCount] = useState(0)
  return(
    <>
      <Header/>
      <Hero/>
      <Players/>
      <Footer/>
    </>
  )

}

export default App
