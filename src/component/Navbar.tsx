import { useAuth0 } from "@auth0/auth0-react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  const { loginWithRedirect, logout } = useAuth0();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
              <NavLink
                className="nav-link"
                to="#"
                onClick={() => loginWithRedirect}
              >
                Login
              </NavLink>
              <NavLink className="nav-link" to="#" onClick={() => logout}>
                Logout
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
