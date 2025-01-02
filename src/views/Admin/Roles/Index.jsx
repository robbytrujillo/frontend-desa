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
    // title page
    document.title = "roles - Desa Digital";

    // define state "roles"
    const [roles, setRoles] = useState([]);

    // define state "pagination"
    const [pagination, setPagination] = useState({ 
        currentPage: 0,
        per_page: 0,
        total: 0,  
    });

    // define state "keywords"
    const [keywords, setKeywords] = useState("");

    // token from cookies
    const token = Cookies.get("token");

    // function fetchData
    const fetchData = async (pageNumber = 1, keywords = "") => {
        // define variable "page"
        const page = pageNumber ? pageNumber : pagination.currentPage;

        await Api.get(`/api/admin/roles?search=${keywords}&page=$page}`, {
            // header
            headers: {
                // header Bearer + Token
                "Authorization": `Bearer ${token}`,
            },
        }).then((response) => {
            // set data response to state "setRoles"
            setRoles(response.data.data.data);

            // set data pagination to state "pagination"
            setPagination(() => ({
                currentPage: response.data.data.current_page,
                perPage: response.data.data.per_page,
                total: response.data.data.total,
        }));
    });
};

    // return (
    //     <LayoutAdmin>
    //         <h1>Halaman Roles Index</h1>
    //     </LayoutAdmin>
    // );
}