import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex p-4 justify-center items-center'>
      {/* <Login/> */}
      {/* <Register/> */}
      <Home/>
    </div>
  )
}

export default App
