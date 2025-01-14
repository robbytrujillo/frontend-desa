// import useState and useEffect
import { useState, useEffect } from 'react';

// import Link from react router dom
import { Link } from 'react-router-dom';

// import api
import Api from "react-router-dom";

// import js cookie
import Cookies from 'js-cookie';

// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import permissions
import hasAnyPermission from "../../../utils/Permissions";

// import pagination component
import Pagination from "../../../components/Pagination";

export default function PageIndex() {
    // title page
    document.title = "Pages - Desa Digital";

    // define state "pages"
    const [pages, setPages] = useState([]);

    // define state "pagination"
    const [pagination, setPagination] = useState({
        currentPage: 0,
        perPage: 0,
        total: 0,
    });

    // define state "keywords"
    const [keywords, setKeywords] = useState("");

    // token from cookies
    const token = Cookies.get('token');

    
    return (
        <LayoutAdmin>
            <h1>Halaman Pages Index</h1>
        </LayoutAdmin>
    );
}