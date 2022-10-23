import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import diya from './components/images/deewali.png';

function App() {
  return (
   <>
     <Router>
      <Navbar/>
      <img  className="diya" src={diya} alt=""  height="150px" width="150px" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
     </Router>
   </>
  );
}

export default App;
