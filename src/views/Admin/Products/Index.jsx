// import useState and useEffect
import { useState, useEffect } from 'react';

// import Link from react router dom
import { Link } from 'react-router-dom';

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from 'js-cookie';

// import Layout
import LayoutAdmin from "../../../layouts/Admin";

// import permissions
import hasAnyPermission from '../../../utils/Permissions';

// import pagination component
import Pagination from '../../../components/general/Pagination';

export default function ProductsIndex() {
    // title page
    document.title = "Products - Desa Digital";

    // define state "products"
    const [products, setProducts] = useState([]);

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

    // function fetchData
    const fetchData = async (pageNumber = 1, keywords = "") => {
        // define variable "page"
        const page = pageNumber ? pageNumber : pagination.currentPage;

        await Api.get(`/api/admin/products?search=${keywords}&page=${page}`, {
            // header
            headers: {
                // header Bearer + Token
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            // set data response to state "setProducts"
            setProducts(response.data.data.data);

            // set data pagination to state "pagination"
            setPagination(() => ({
                currentPage: response.data.data.current_page,
                perPage: response.data.data.per_page,
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
            <h1>Halaman Products Index</h1>
        </LayoutAdmin>
    );
}