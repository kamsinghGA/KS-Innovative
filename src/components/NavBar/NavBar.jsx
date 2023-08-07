import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {/* Use regular anchor tags for smooth scrolling */}
      <a href="#services">Our Services</a>
      &nbsp; | &nbsp;
      <a href="#contact">Let's Talk</a>
      {/* Use Link for routing */}
      &nbsp;&nbsp;<Link to="#" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
