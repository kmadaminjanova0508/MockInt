// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Directions from './pages/Directions'
import About from './pages/About'
import Contact from './pages/Contact'
import Experts from './pages/Experts'
import Navbar from './components/Navbar'
import Faq from './pages/faq'
import Login from './pages/Login'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/directions' element={<Directions />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/experts' element={<Experts/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
      <Footer/>
    </div> 
  )
}

export default App