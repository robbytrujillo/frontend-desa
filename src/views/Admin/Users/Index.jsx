// import useState and useEffect
import { useState, useEffect } from 'react';

// import Link from react router dom
import { Link } from 'react-router-dom';

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from 'js-cookie';

// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import permissions
import hasAnyPermission from '../../../utils/Permissions';

// import pagination component
import Pagination from '../../../components/general/Pagination';

export default function UserIndex() {
    // title page
    document.title = "Users - Desa Digital";

    // define state "users"
    const [users, setUsers] = useState([]);

    // define state "pagination"
    const [pagination, setPagination] = useState({ 
        currentPage: 0,
        per_page: 0,
        total: 0,
    });
    
    // define state "keywords"
    cont [keywords, setKeywords] = useState("");

    // token from cookies
    const token = Cookies.get('token');

    // function fetchData
    const fetchData = async (pageNumber = 1, keywords = "") => {
        // define variable "page"
        const page = pageNumber ? pageNumber :  pagination.currentPage;

        await Api.get(`/api/admin/users?search=${keywords}&page=${page}`, {
            // header
            headers: {
                // header Bearer + Token
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            // set data response to state "setUsers"
            setUsers(response.data.data.data);

            // set data pagination to state "pagination"
            setPagination(() => ({
                currentPage: response.data.data.current_page,
                per_page: response.data.data.per_page,
                total: response.data.data.total,
            }));
        });
    };

    // useEffect
    useEffect(() => {
        // call function "fetchData"
        fetchData();
    }, []);

    // function "searchData"
    const searchData = async (e) => {
        // set value to state "keywords"
        setKeywords(e.target.value);

        // call function "fetchData"
        fetchData(1, e.target.value);
    };
    
    return (
        <LayoutAdmin>
            <h1>Halaman Users Index</h1>
        </LayoutAdmin>
    );
}