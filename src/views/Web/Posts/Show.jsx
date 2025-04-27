// import React
import React, { useState, useEffect } from "react";

// import layout
import LayoutWeb from "../../../layouts/Web";

// import service api
import Api from "../../../services/Api";

// import useParams
import { Link, useParams } from "react-router-dom";

// import component loading
import Loading from "../../../components/general/Loading";

// import date ID
import DateID from "../../../utils/DateID";

export default function WebPostsShow() {
    // init state detail post
    const [post, setPost] = useState({});
    const [loadingPost, setLoadingPost] = useState(true);

    // init state all posts homepage
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(true);

    // destruct slug
    const { slug } = useParams();

    // fetch data post
    const fetchDetailDataPost = async () => {
        // setLoadingPost "true"
        setLoadingPost(true);

        // fetch data
        await Api.get(`/api.public/posts/${slug}`).then((response) => {
            // assign response to state "posts"
            setPost(response.data.data);

            // title page
            document.title = `${response.data.data.title} - Desa Digital`
        
            // setLoadingPost "fales"
            setLoadingPost(false);
        })  
    };

    // fetch data all posts
    const fetchAllPosts = async () => {
        // setLoadingPosts "true"
        setLoadingPost(true);

        // fetch data
        await Api.get("/api/public/pstshome").then((response) => {
            
        })
    }
    return (
        <LayoutWeb>
            <h1>Halaman Post Show</h1>
        </LayoutWeb>
    )
}