import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


export default function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className='navbar-brand' to='/'>Home</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className="navbar-brand" to="/services">Our Services</Link>
          </li>
          <li className='nav-item'>
            <Link className="navbar-brand" to="/contact-us">Let's Talk</Link>
          </li>
          <li className='nav-item'>
            <Link className="navbar-brand" to="/testimonials">Testimonials</Link>
          </li>
          <li className='nav-item'></li>
        </ul>
      </div>
    </nav>
  );
}