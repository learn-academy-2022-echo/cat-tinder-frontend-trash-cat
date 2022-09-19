import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import RacoonIndex from './pages/RacoonIndex'
import RacoonShow from './pages/RacoonShow'
import RacoonNew from './pages/RacoonNew'
import RacoonEdit from './pages/RacoonEdit'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
    <Header />
    <Home />
    <RacoonIndex />
    <RacoonShow />
    <RacoonNew />
    <RacoonEdit />
    <NotFound />
    <Footer />

    </>
  );
}

export default App;
