import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="bg-dark text-light py-4">
        <div className="container">
          <h1>My Social Media</h1>
          <ul className="nav d-flex align-items-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
