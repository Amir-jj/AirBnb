import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar/Nav'
import Hero from './Components/Hero/Hero'
import Card from './Components/Card/Card'
import  data from './Components/Card/data'

function App() {
  const card = data.map(item=>{
    return(
      <Card
      key = {item.id}
      {...item}
      />
    )
    
  })

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='card'>
      {card}
      </div>
      
    </div>
  )
}

export default App
