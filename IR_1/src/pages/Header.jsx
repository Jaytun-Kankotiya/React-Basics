 import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className="bg-dark text-light py-3">
        <div className="container">
          <h1>Ecommerce Website</h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
