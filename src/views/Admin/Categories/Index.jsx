// import useState and useEffect
import { useState, useEffect } from 'react';

// import Link from react router dom
import { Link } from 'react-router-dom';

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from "js-cookie";

// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import permissions
import hasAnyPermission from '../../../utils/Permissions';

// import pagination components
import Pagination from '../../../components/general/Pagination';

export default function CategoriesIndex() {
    // title page
    document.title = "Categories - Desa Digital";

    // define state "categories"
    const [categories, setCategories] = useState([]);

    // define state "pagination"
    const [pagination, setPagination] = useState({ 
        currentPage: 0,
        per_page:0,
        total: 0, 
    });

    // define state "keywords"
    const [keywords, setKeywords] = useState("");

    // token from cookies
    const token = Cookies.get('token');

    // function fetchData
    const fetchData = async (pageNumber = 1, keywords = "") => {
        // define vairable "page"
        const page = pageNumber ? pageNumber : paginationa.currentPage;

        await Api.get(`/api/admin/categories?search=${keywords}&page=${page}`, {
            // header
            headers: {
                // header Bearer + Token
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            // set data response to state "setCategories"
            setCategories(response.data.data.data);

            // set data pagination to state "pagination"
            setPagination(() => ({
                currentPage: response.data.data.current_page,
                perPage: response.data.data.per_page,
                total: response.data.data.total,
            }))
        })
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
    }

    return (
        <LayoutAdmin>
            <h1>Halaman Categories Index</h1>
            <main>
                <div className="container-fluid mb-5 mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                {hasAnyPermission(["categories.create"]) && (
                                    <div className="col-md-3 col-12 mb-2">
                                        <div className="col-md-3 col-12 mb-2">
                                            <Link 
                                                to="/admin/categories/create"
                                                className="btn btn-md btn-primary border-0 shadow-sm w-100"
                                                type="button"
                                            >
                                                <i className="fa fa-plus-circle"></i> Add New
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAdmin>
    );
}