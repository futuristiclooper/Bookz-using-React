import { Logo } from "../config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedinUser, setLoggedinUser] = useState("true");
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <div className="list-items">
            <li><Link to={'/'}> Home </Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/contact'}>Contact </Link></li>
            <li><Link to={'/cart'}>Cart</Link></li>
          </div>
          {loggedinUser === "true" ? (
            <div className="logout-container">
              <button
                onClick={() => setLoggedinUser("false")}
                className="logout-button"
              >
                Logout
              </button>{" "}
            </div>
          ) : (
            <div className="login-container">
              <button
                onClick={() => setLoggedinUser("true")}
                className="login-button"
              >
                Login
              </button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
