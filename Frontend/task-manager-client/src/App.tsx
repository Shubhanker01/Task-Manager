
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import { ToastContainer } from 'react-toastify'
import Login from './components/Login'
import MainDashboard from './components/MainDashboard'

function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/main-dashboard/:userId' element={<MainDashboard />}></Route>
      </Routes>


    </>
  )
}

export default App
