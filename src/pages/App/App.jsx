import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import ServicesSection from '../../components/ServicesSection/ServicesSection'; 
import ContactPage from '../ContactPage/ContactPage';
import ResultsPage from '../../pages/ResultsPage/ResultsPage';
import AboutPage from '../../pages/AboutPage/AboutPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <nav>
              {/* <ul>
                <li><Link to="services" smooth={true} duration={500}>Our Services</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Let's Talk</Link></li>
              </ul> */}
            </nav>
            <Routes>
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/results" element={<ResultsPage />} /> 
              <Route path="/about" element={<AboutPage />} /> 
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
      <AboutPage />
      <ServicesSection />
      <ResultsPage />
      <ContactPage />
    </main>
  );
}