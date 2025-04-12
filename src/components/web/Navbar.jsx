import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    // assigning location variable
    const location = useLocation();

    // destructuring pathname from location
    const { pathname } = location;

    // Javascript split method to get the name of the path in array
    const activeRoute = pathname.split("/");

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-light navbar-top d-none d-md-block d-lg-block">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item me-4">
                                <i className="fa fa-envelope"></i> info@desa-digital.com
                            </li>
                            <li className="nav-item me-4">
                                <i className="fa fa-phone"></i> +62 813 6794 3830 
                            </li>
                        </ul>
                        <div>
                            IKUTI KAMI :
                            <a href="#" className="ms-2 me-2">
                                <i className="fab fa-facebook-square text-white fa-lg"></i>
                            </a>
                            <a href="http://" className="ms-2 me-2">
                                <i className="fab fa-instagram text-white fa-lg"></i>
                            </a>
                            <a href="#" className="ms-2 me-2">
                                <i className="fab fa-youtube text-white fa-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="jumbotron-header pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 d-none d-md-block d-lg-block">
                            <div className="header-logo">
                                <a href="#">
                                    <img src="/images/desa-digi.png" width="110" className="img-responsive" />
                                </a>
                            </div>
                            <div className="header-text">
                                <h2 className="header-school">DESA DIGITAL</h2>
                                <hr />
                                <div className="header-address">
                                    Bojong Nangka Gunung Putri Bogor
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div 
                                className="d-none d-md-block d-lg-block"
                                style={{ marginTop: "60px"  }}
                            ></div>
                            <form
                                className="d-flex"
                                action="#"
                                method="GET"
                            >
                                <input
                                    className="form-control border-0 me-2"
                                    type="search"
                                    name="q"
                                    placeholder="cari sesuatu..."
                                    aria-label="Search"
                                />
                                <button className="btn btn-primary-dark" type="submit" style={{ backgroundColor: '#005005', borderColor: '#005005', color: 'white' }}>
                                    CARI
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-md navbar-light navbar-blue nav-web">
                <div className="container">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item ms-2">
                                <Link
                                    className={
                                        activeRoute[1] === ""
                                            ? "nav-link active text-uppercase"
                                            : "nav-link text-uppercase"
                                    }
                                    to="/"
                                >
                                    <i className="fa fa-home"></i> HOME
                                </Link>
                            </li>

                            <li className = "nav-item ms-2">
                                <Link
                                    className={
                                        activeRoute[1] === "pages"
                                        ? "nav-link active text-uppercase"
                                        : "nav-link text-uppercase"
                                        }
                                        to="/pages"
                                    >
                                        <i className="fa fa-info-circle"></i> TENTANG DESA
                                </Link>
                            </li>

                            <li className="nav-item ms-2">
                                <Link
                                className={
                                    activeRoute[1] === "aparaturs" 
                                    ? "nav-link active text-uppercase"
                                    : "nav-link text-uppercase"
                                }
                                to="/aparaturs"
                                >
                                    <i className="fa fa-user-circle"></i> APARATURS
                                </Link>
                            </li>
                            
                            <li className="nav-item ms-2">
                                <Link
                                className={
                                    activeRoute[1] === "posts" 
                                    ? "nav-link active text-uppercase"
                                    : "nav-link text-uppercase"
                                }
                                to="/posts"
                                >
                                    <i className="fa fa-book"></i> BERITA
                                </Link>
                            </li>
                            
                            <li className="nav-item ms-2">
                                <Link
                                className={
                                    activeRoute[1] === "products" 
                                    ? "nav-link active text-uppercase"
                                    : "nav-link text-uppercase"
                                }
                                to="/products"
                                >
                                    <i className="fa fa-shopping-bag"></i> PRODUCTS
                                </Link>
                            </li>
                            
                            <li className="nav-item ms-2">
                                <Link
                                className={
                                    activeRoute[1] === "photos" 
                                    ? "nav-link active text-uppercase"
                                    : "nav-link text-uppercase"
                                }
                                to="/photos"
                                >
                                    <i className="fa fa-images"></i> GALERI
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}