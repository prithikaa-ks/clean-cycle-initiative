import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Our Team</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/faq">FAQ</Link>
    </nav>
  );
}

export default Navbar