import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    // assigning location variable
    const location = useLocation();

    // destructuring pathname from location
    const { pathname } = location;

    // Javascript split method to get the name of the path in array
    const activeRoute = pathname.split("/");
}