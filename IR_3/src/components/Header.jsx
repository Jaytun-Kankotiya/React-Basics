import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <main>
        <nav className="bg-dark text-light ">
          <div className="container py-4">
            <h1 className="mx-2">Todos</h1>
            <div>
              <ul className="nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/todos">
                    Todos
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </>
  );
};
export default Header;
