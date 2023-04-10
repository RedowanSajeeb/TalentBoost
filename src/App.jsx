import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from '@material-tailwind/react'
import NavbarRendom from './components/Navbar/NavbarRendom'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App colorbg-Linear pt-5 ">
      <NavbarRendom></NavbarRendom>
      <Outlet></Outlet>
    </div>
  );
}

export default App
