import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo"><NavLink to="/">Baseball Info</NavLink></h1>
        <ul className="nav-links">
          <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1' })}>Home</NavLink></li>
          <li><NavLink to="/current" style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1' })}>Current</NavLink></li>
          <li><NavLink to="/past" style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1' })}>Past</NavLink></li>
          <li><NavLink to="/hof" style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1' })}>Hall of Fame</NavLink></li>
          <li><NavLink to="/minors" style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1' })}>Minor League</NavLink></li>
          <li><NavLink to="/about" style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1' })}>About</NavLink></li>
          <li><NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? '#3498db' : '#ecf0f1' })}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
