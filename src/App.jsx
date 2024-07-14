import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { useSelector } from 'react-redux'
import AuthComponent from './components/AuthComponent'



function App() {

  const auth = useSelector((state) => state.auth);

  return (
    <>
     {auth.isAuth?<Home></Home>:<AuthComponent></AuthComponent>}
    </>
  )
}

export default App
