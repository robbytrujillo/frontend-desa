// import Link
import { Link, useLocation } from 'react-router-dom';

// import js cookie
import Cookies from 'js-cookie';

// import permissions
import hasAnyPermission from "../../utils/Permissions";

export default function sidebar() {
    // assigning location variable
    const location = useLocation();

    // destructuring pathname from location
    const { pathname } = location;

    // Javascript split method to get the name of the path in array
    const activeRoute = pathname.split("/");

    // get data user from cookies
    const user = JSON.parse(Cookies.get("user"));

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sideNavAccordion">
            <div className="sb-sidenav-menu">
                <div className="nav">
                    <div className="sb-sidenav-menu-heading"></div>
                    <Link className={activeRoute[2] === "dashboard" ? "nav-link active-sidebar" : "nav-link"} to="/admin/dashboard">
                        <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>Dashboard
                    </Link>

                    {( hasAnyPermission(["categories.index"]) || 
                       hasAnyPermission(["posts.index"]) ||
                       hasAnyPermission(["pages.index"]) ||
                       hasAnyPermission(["products.index"]) ) && (
                       <>
                        <div className="sb-sidenav-menu-heading">CONTENT MANAGEMENT</div>
                        <a className={
                            "nav-link collapsed " + (activeRoute[2] === "categories"
                                ? "active-sidebar"
                                : activeRoute[2] === "posts"
                                ? "active-sidebar"
                                : activeRoute[2] === "pages"
                                ? "active-sidebar"
                                : activeRoute[2] === "products"
                                ? "active-sidebar"
                                : "")
                            }
                            href = "#" 
                            data
                            )
                        }
                       </>
                    )}
                </div>
            </div>
        </nav>
    )
}