import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-info">
                <div className="container-fluid">
                    <Link className='text-decoration-none text-dark' to="/">
                        <h3 className='fw-bold'>Web Services</h3>
                    </Link>
                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to="/"> INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold text-dark" to="servicios">DATOS CLIENTE</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
      </div>
  )
}

export default Navbar;
