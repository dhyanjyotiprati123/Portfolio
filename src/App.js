import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import "./Style/main.css";

const App = () => {
  const [open, setOpen]=useState(false)
  return (
    <div>
       <Navbar open={open} setOpen={setOpen} />
       <Sidebar open={open} setOpen={setOpen} />
       <Home />
    </div>
  )
}

export default App
