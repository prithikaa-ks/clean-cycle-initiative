import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      {/* <Link to="/contact">Contact</Link> */}
      {/* <Link to="/faq">FAQ</Link> */}
      <Link to="/get-started">Get Started</Link>
    </nav>
  );
}

export default Navbar