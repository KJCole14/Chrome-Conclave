import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Shop from './pages/Shop'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>

        </Router>
      {/* <Home /> */}
      {/* <Shop /> */}
      {/* <Contact/> */}
      <Footer/>
    </div>
  );
}

export default App;
