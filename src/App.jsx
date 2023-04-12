import { useState } from 'react'


import './App.css'
import { Navbar } from '@material-tailwind/react'
import NavbarRendom from './components/Navbar/NavbarRendom'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="pt-5 colorbg-Linear sm:pb-20 ">
        <NavbarRendom></NavbarRendom>
      </div>

      <Outlet></Outlet>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App
