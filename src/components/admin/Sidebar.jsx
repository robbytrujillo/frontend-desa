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
            
        </nav>
    )
}