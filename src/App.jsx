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
    <div className="App ">
      <div className="pt-5 colorbg-Linear sm:pb-10 ">
        <NavbarRendom></NavbarRendom>
      </div>

      <Outlet></Outlet>
    </div>
  );
}

export default App
