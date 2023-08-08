import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import ServicesPage from '../ServicesPage/ServicesPage';
import ContactPage from '../ContactPage/ContactPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomePage from '../HomePage/HomePage';
import ResultsPage from '../ResultsPage/ResultsPage'



export default function App() {

  return (
    <main className="App">
          <>
            <NavBar />
            <Routes>
              {/* Route components in here */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/results" element={<ResultsPage />} />

            </Routes>
          </>
    </main>
  );
}
