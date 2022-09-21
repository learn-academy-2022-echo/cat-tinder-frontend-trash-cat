
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import RacoonIndex from './pages/RacoonIndex'
import RacoonShow from './pages/RacoonShow'
import RacoonNew from './pages/RacoonNew'
import RacoonEdit from './pages/RacoonEdit'
import NotFound from './pages/NotFound'
import { Routes, Route } from 'react-router-dom'
import mockRacoonArray from './mockRacoon'
import { useState } from 'react'

function App() {
  
  const [racoon, setRacoon] = useState(mockRacoonArray)
  
  return (
    <>
    <Header />
      <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/racoonindex" element={<RacoonIndex mockRacoon = { mockRacoonArray }/>} />
          <Route path ="/racoonshow/:id"  element={<RacoonShow  mockRacoon = { mockRacoonArray }/>} />
          <Route path ="/racoonnew" element={<RacoonNew />} />
          <Route path ="/racoonedit" element={<RacoonEdit />} />
          <Route path ="/*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
