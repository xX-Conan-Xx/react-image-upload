import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  pageTitle: string;
};

const Layout = ({ children, pageTitle }: Props) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            CZ4052 Cloud Computing Course Project
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="container-fluid mt-5">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar mt-5">
            <div className="sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">
                    Create a function
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/update" className="nav-link">
                    Update a function
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/delete" className="nav-link">
                    Delete a function 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/get" className="nav-link">
                    Get the link
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main role="main" className="col-md-10 ml-sm-auto col-lg-10 px-4">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">{pageTitle}</h1>
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;



