import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
  
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="navbar-brand me-2" >
              <img
                src="https://www.printila.in/static/media/logo-dark.a13d368e.svg"
                height="35"
                alt="Logo"
                loading="lazy"
              />
            </a>
        
        </ul>
  
        <div className="d-flex align-items-center">
          <a href="javascript:void(0)" type="button" className="btn btn-link px-3 me-2 text-dark">
            Home 
          </a>
          <a href="javascript:void(0)" type="button" className="btn btn-link px-3 me-2 text-dark">
            Create Enquiry 
          </a>
          <a href="javascript:void(0)" type="button" className="btn btn-link px-3 me-2 text-dark">
            My Enquiry 
          </a>
          <a href="javascript:void(0)" type="button" className="btn btn-link px-3 me-2 text-dark">
            Saved Design 
          </a>
          <a href="javascript:void(0)" type="button" className="btn btn-link px-3 me-2 text-danger">
            My Order 
          </a>
          <a href="javascript:void(0)" type="button" className="btn btn-link px-3 me-2 text-dark">
            About Us 
          </a>
          <a href="javascript:void(0)" type="button" className="btn btn-link px-3 me-2 text-dark">
            Contact Us 
          </a>
          <button type="button" className="btn btn-danger me-3">
            Log Out
          </button>
        </div>
      </div>
    </div>
  </nav>
  )
}
