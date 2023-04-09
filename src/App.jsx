import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from '@material-tailwind/react'
import NavbarRendom from './components/Navbar/NavbarRendom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavbarRendom></NavbarRendom>
        
    </div>
  )
}

export default App
