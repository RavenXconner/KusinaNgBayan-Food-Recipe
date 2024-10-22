import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./FooterPage"; // Adjust the path based on your folder structure

const MenuPage = () => {
  return (
    <div>
      {/* Navbar & Hero Start */}
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
          <div className="container text-center my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Food Menu
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Menu
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar & Hero End */}

      {/* Menu Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Explore Regional Cuisine</h1>
          </div>

          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                  data-bs-toggle="pill"
                  href="#tab-1"
                >
                  <i className="fa fa-coffee fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Kusina</small>
                    <h6 className="mt-n1 mb-0">Luzon</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-2"
                >
                  <i className="fa fa-hamburger fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Kusina</small>
                    <h6 className="mt-n1 mb-0">Visayas</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                  data-bs-toggle="pill"
                  href="#tab-3"
                >
                  <i className="fa fa-utensils fa-2x text-primary"></i>
                  <div className="ps-3">
                    <small className="text-body">Kusina</small>
                    <h6 className="mt-n1 mb-0">Mindanao</h6>
                  </div>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {/* Luzon Regions */}
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region I (Ilocos Region)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region II (Cagayan Valley)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region III (Central Luzon)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region IV-A (CALABARZON)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region IV-B (MIMAROPA)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      National Capital Region (NCR)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Cordillera Administrative Region (CAR)
                    </Link>
                  </div>
                </div>
              </div>

              {/* Visayas Regions */}
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region VI (Western Visayas)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region VII (Central Visayas)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region VIII (Eastern Visayas)
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mindanao Regions */}
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region IX (Zamboanga Peninsula)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region X (Northern Mindanao)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region XI (Davao Region)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region XII (SOCCSKSARGEN)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      Region XIII (Caraga)
                    </Link>
                  </div>
                  <div className="col">
                    <Link to="/maintenance" className="btn btn-primary w-100 mb-3">
                      BARMM (Bangsamoro)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu End */}

      

      {/* Back to Top */}
      <Link
        to="#"
        className="new-back-to-top btn-lg btn-primary btn-lg-square"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <i className="bi bi-arrow-up"></i>
      </Link>
      {/* Footer Component */}
      <Footer /> {/* Add Footer component here */}
    </div>
  );
};

export default MenuPage;
