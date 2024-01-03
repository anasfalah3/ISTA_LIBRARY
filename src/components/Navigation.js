import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Navigation() {
  const user = useSelector((state) => state.user);
  return (

      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to={"/"} className="logo">
                  <h1><em>ISTA</em> Library</h1>
                </Link>
                <ul className="nav">
                  <li>
                    <Link to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Browse"}>Browse</Link>
                  </li>
                  <li>
                    <Link to={"/Profile"}>
                      Profile
                      <img src={`../assets/images/${user.img}`} alt="" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
  );
}
