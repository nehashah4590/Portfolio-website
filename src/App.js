import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './components/Projects';
import Home from './components/Home';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
   <>
     <Router>
      <Navbar/>
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
