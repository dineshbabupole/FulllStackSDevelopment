
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/Navbar';
function App() {
  

  return (
    <>
      <Navbar />
         <BrowserRouter>
        
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
