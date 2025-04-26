// import React
import React, { useState, useEffect } from "react";

// import layout
import LayoutWeb from "../../../layouts/Web";

// import service api
import Api from "../../../services/Api";

// import component alert
import AlertDataEmpty from "../../../components/general/AlertDataEmpty";

// import component loading
import Loading from "../../../components/general/Loading";

// import component card post
import CardPost from "../../../components/general/CardPost";

// import pagination component
import Pagination from "../../../components/general/Pagination";

export default function WebPostsIndex() {
    // title page
    document.title = "Berita - Desa Digital";

    // init state
    const [posts, setPosts] = useState([]);
    const [loadingPost, setLoadingPost] = useState(true);

    // define state "pagination"
    const [pagination, setPagination] = useState({
        currentPage: 0,
        perPage: 0,
        total: 0,
    });

    // fetch data posts
    const fetchDataPosts = async (pageNumber = 1) => {
        // setLoadingPost "true"
        setLoadingPost(true);

        // define variable "page"
        const page = pageNumber ? pageNumber : pagination.currentPage;

        await Api.get(`/api/public/posts?page=${page}`).then((response) => {
            // assign response to state "posts"
            setPosts(response.data.data.data);

            // set data pagination to state "pagination"
            setPagination(() => ({
                currentPage: response.data.data.current_page,
                perPage: response.data.data.data.per_page,
                total: response.data.data.total,
            }));

            // setLoadingPost "false"
            setLoadingPost(false);
        });
    };

    // hook useEffect
    useEffect(() => {
        // call method "fetchDataPosts"
        fetchDataPosts();
    }, []);
    
    return (
        <LayoutWeb>
            <h1>Halaman Posts Index</h1>
        </LayoutWeb>
    )
}
