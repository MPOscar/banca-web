import React from 'react';

function Navbar() {
  return (
    <div>

      <div className="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-sm-8 col-7">
              <ul className="info">
                <li><a href="#"><i className="fa fa-envelope"></i>cincodeoro@gmail.com</a></li>
                <li><a href="#"><i className="fa fa-phone"></i>097291818</a></li>
              </ul>
            </div>
            <div className="col-lg-4 col-sm-4 col-5">
              <ul className="social-media">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="header-area header-sticky wow slideInDown z-index-1050" data-wow-duration="0.75s" data-wow-delay="0s">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">

                <a href="index.html" className="logo">
                  <img src="assets/images/logo-v1.png" alt=""/>
                </a>

                <ul className="nav">
                  <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                  <li className="scroll-to-section"><a href="#about">About</a></li>
                  <li className="scroll-to-section"><a href="#services">Services</a></li>
                  <li className="scroll-to-section"><a href="#portfolio">Projects</a></li>
                  <li className="scroll-to-section"><a href="#blog">Blog</a></li>
                  <li className="scroll-to-section"><a href="#contact">Contact</a></li>
                  <li className="scroll-to-section">
                    <div className="border-first-button"><a href="#contact">Free Quote</a></div>
                  </li>
                </ul>
                <a className='menu-trigger'>
                  <span>Menu</span>
                </a>

              </nav>
            </div>
          </div>
        </div>
      </header>

    </div>
  );
}

export default Navbar;
