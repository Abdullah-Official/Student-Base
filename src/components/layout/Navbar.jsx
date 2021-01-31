import React from 'react'
import { useFirebase } from 'react-redux-firebase';
import {NavLink} from 'react-router-dom'

function Navbar() {
  const firebase = useFirebase();
    return (
      <>
        <nav className="navbar navbar-expand-sm navbar-light bg-white">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              AbdulLaH Offici4L
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#dropdownContent"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="dropdownContent">
              <ul className="navbar-nav mr-auto"></ul>
              <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                  <NavLink to="/studentForm" className="btn btn-primary mr-3">
                    Add Student
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="!#"
                    id="navbarDropdown"
                    data-toggle="dropdown"
                  >
                    <img
                      height="35px"
                      width="35px"
                      className="rounded-circle"
                      src="https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/81521948_1332434683627695_2523288901238390784_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=hFnSvPbxBO8AX_dujII&_nc_ht=scontent.fkhi9-1.fna&oh=3f364c4dcf87915bb378744318386c2f&oe=5FCA2C5F"
                      alt=""
                    />
                    <span className="ml-2 navbar-text">Abdullah Khan</span>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="!#">
                      Profile
                    </a>
                    <a className="dropdown-item" href="!#" onClick={() => firebase.logout()}>
                      Logout
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="!#">
                      Ads
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default Navbar
