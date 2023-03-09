// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Media from "./components/Media";
import Contact from "./components/Contact";
import logo2 from "./imgs/logo2.png";
import spotify from "./imgs/spotify.png";
import facebook from "./imgs/facebook.png";
import fundo from "./imgs/fundo.jpg"
import './App.css';

const App = () => {
  return (
    <div className="App">
        {/* <Router> */}
        <HashRouter>
          <div className="app__left-side">
            <Link to="./"><img id="logo" src={logo2} alt="Logo of the ensemble Arte Mínima" /></Link>
            <div className="app__left-side-credits">
              <p>© Arte Minima 2023</p>
              <p>website by Ricardo Leitão Pedro</p>
            </div>
          </div>

          <div className="app__right-side">
            <div className="app__right-side-icons">
              <a className="spotify-icon" href="https://open.spotify.com/artist/3DhfzcCDDMQPVY2uIF81Vc" target="_blank" rel="noopener noreferrer">
                <img id="spotify" src={spotify} alt="Spotify's icon" />
              </a>
              <a className="facebook-icon" href="https://www.facebook.com/ArteMinima.RenaissanceEnsemble" target="_blank" rel="noopener noreferrer">
                <img id="facebook" src={facebook} alt="Facebook's icon" />
              </a>
            </div>

            <div className="app__right-side-dates">
              <p className="app__right-side-titles">agenda</p>
              <p><span style={{fontWeight: 'bold'}}>april 20</span> concert (Caminha)</p>
              <p><span style={{fontWeight: 'bold'}}>april 21</span> concert (Barcelos)</p>
              <p><span style={{fontWeight: 'bold'}}>april 24-29</span> album recording (Vicente Lusitano)</p>
              <p><span style={{fontWeight: 'bold'}}>july 21</span> concert (Cascais)</p>
              <p><span style={{fontWeight: 'bold'}}>july 22</span> concert (Vila do Conde)</p>
            </div>

            <div className="app__right-side-partners">
              <p className="app__right-side-titles">partners</p>
              <p>DG Artes, Antena 2, ...</p>
            </div>
          </div>

          
          <Header />
          <div className="main" style={{ backgroundImage: `url(${fundo})` }}>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/bio" element={<Bio />}/>
              <Route path="/media" element={<Media />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>

        {/* </Router> */}
        </HashRouter>
      </div>
  );
}

export default App;
