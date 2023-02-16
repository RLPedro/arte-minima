import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Media from "./components/Media";
import Contact from "./components/Contact";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>

        <Link to="./"><img id="logo" src="imgs/logo.png" alt="Logo of the ensemble Arte Mínima" /></Link>
        
        <div className="icons-container">
          <a className="spotify-icon" href="https://open.spotify.com/artist/3DhfzcCDDMQPVY2uIF81Vc" target="_blank" rel="noopener noreferrer">
            <img id="spotify" src="imgs/spotify.png" alt="Spotify's icon" />
          </a>
          <a className="facebook-icon" href="https://www.facebook.com/ArteMinima.RenaissanceEnsemble" target="_blank" rel="noopener noreferrer">
            <img id="facebook" src="imgs/facebook.png" alt="Facebook's icon" />
          </a>
        </div>

        <img id="dragon" src="imgs/dragon.png" alt="Decorative dragon in Renaissance style" />
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bio" element={<Bio />}/>
          <Route path="/media" element={<Media />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
