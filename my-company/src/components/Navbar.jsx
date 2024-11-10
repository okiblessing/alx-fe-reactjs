import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;


