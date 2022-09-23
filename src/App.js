
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
import mockRacoon from './mockRacoon'
import { useState, useEffect } from 'react'


function App() {
  
  const [racoons, setRacoons] = useState([])

  const updateRacoon = (racoon, id) => {
    console.log("racoon:", racoon)
    console.log("id:", id)
  }

  useEffect(()=>{
    readRacoon()
  }, [])

  const readRacoon = () => {
    fetch("http://localhost:3000/racoons")
    .then(response => response.json())
    .then(payload => {setRacoons(payload)})
    .catch(error => console.log(error))
  }

  const createRacoon = (racoon) => {
    fetch("http://localhost:3000/racoons", {
      body: JSON.stringify(racoon),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => readRacoon(payload))
    .catch(errors => console.log("Raccoon create errors:", errors))
  }
  
  return (
    <>
    <Header />
      <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/racoonindex" element={<RacoonIndex racoons = { racoons }/>} />
          <Route path ="/racoonshow/:id"  element={<RacoonShow  racoons = { racoons }/>} />
          <Route path ="/racoonnew" element={<RacoonNew createRacoon={createRacoon} />} />
          <Route path ="/racoonedit/:id" element={<RacoonEdit racoons={racoons} updateRacoon={updateRacoon} />} />
          <Route path ="/*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
