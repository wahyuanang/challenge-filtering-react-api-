function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg container pt-4">
      <div className="container-fluid">
        <div>
          <img src="/images/Rectangle.svg" alt="" />
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="openSidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav d-flex gap-4 fw-medium d-none d-lg-flex">
              <a className="nav-link" href="#OurServices">
                Our Services
              </a>
              <a className="nav-link" href="#WhyUs">
                Why Us
              </a>
              <a className="nav-link" href="#Testimonial">
                Testimonial
              </a>
              <a className="nav-link" href="#Faq">
                FAQ
              </a>
              <button
                type="button"
                className="btn btn-color border-2 p-2 px-3 rounded-2 fw-semibold"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
