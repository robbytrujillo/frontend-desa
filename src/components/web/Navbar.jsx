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
                                <i className="fa fa-facebook-square text-white fa-lg"></i>
                            </a>
                            <a href="http://" className="ms-2 me-2">
                                <i className="fa fa-instagram text-white fa-lg"></i>
                            </a>
                            <a href="#" className="ms-2 me-2">
                                <i className="fa fa-youtube text-white fa-lg"></i>
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
                                    <img src="/images/logo-jbg.png" alt="Logo" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}