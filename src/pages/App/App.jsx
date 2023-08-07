import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link, Element } from 'react-scroll';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import ServicesSection from '../../components/ServicesSection/ServicesSection'; 


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <nav>
              <ul>
                <li><Link to="services" smooth={true} duration={500}>Services</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
              </ul>
            </nav>
            <Routes>
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/contact-us" element={<Contact />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
      <Element name="services">
        <ServicesSection />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </main>
  );
}

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <p>We offer a wide range of services to meet your needs:</p>
      <ul>
        <li>Web Development</li>
        <li>Graphic Design</li>
        <li>Marketing Strategy</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you. Feel free to get in touch:</p>
      <address>
        <p>Email: info@example.com</p>
        <p>Phone: +123-456-7890</p>
      </address>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
