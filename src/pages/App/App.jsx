import { useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import ServicesPage from '../ServicesPage/ServicesPage';
import ContactPage from '../ContactPage/ContactPage'
import TestimonialsPage from '../TestimonialsPage/TestimonialsPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
          <>
            <NavBar />
            <Routes>
              {/* Route components in here */}
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
            </Routes>
          </>
    </main>
  );
}
