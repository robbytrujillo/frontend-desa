// import useState and useEffect
import { useState, useEffect } from "react";

// import Link from react router dom
import { Link } from "react-router-dom";

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from "js-cookie";

// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import permissions
import hasAnyPermission from "../../../utils/Permissions";

// import pagination component
import Pagination from "../../../components/general/Pagination";

export default function RolesIndex() {
    return (
        <LayoutAdmin>
            <h1>Halaman Roles Index</h1>
        </LayoutAdmin>
    );
}