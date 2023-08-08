import { Link } from 'react-router-dom';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar() {

  return (
    <div className='container'>
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
              <Link className="nav-link" to="/services">Services</Link>
            </li>

            <li className='nav-item'>
              <Link className="nav-link" to="/results">Results</Link>
            </li>

            <li className='nav-item'>
              <Link className="nav-link" to="/contact-us">Let's Talk</Link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
}