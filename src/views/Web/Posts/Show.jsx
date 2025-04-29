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
            // assign response to state "posts"
            setPosts(response.data.data);

            // setLoadingPosts "false"
            setLoadingPosts(false);
        });
    };

    // hook useEffect
    useEffect(() => {
        // call method "fetchDetailDataPost"
        fetchDetailDataPost();

        // call method "fetchAllPosts"
        fetchAllPosts();
    }, [slug]);
    
    return (
        <LayoutWeb>
            {/* <h1>Halaman Post Show</h1> */}
            <div className="container mt-4 mb-3">
                <div className="row">
                    <div className="col-md-8 mb-4">
                        {loadingPost ? (
                            <Loading />
                        ) : (
                            <div className="card border-0" shadow-sm rounded-3>
                                <div className="card-body post-content">
                                    <h4 className="text-normal">
                                        {post.title}
                                    </h4>
                                    <div className="author mt-3">
                                        <span>
                                            <i className="fa fa-user"></i> {post.user.name}
                                        </span>
                                        <span>
                                            <i className="fa fa-folder ms-4 ml-4"></i> {" "} {post.category.name}
                                        </span>
                                        <span>
                                            <i className="fa fa-calendar ms-4 ml-4"></i> {" "} {DateID(new DataTransfer(post.created_at))}
                                        </span>
                                    </div>
                                    <hr />
                                    <img 
                                        src={post.image}
                                        class="rounded-3 w-100 mb-3"
                                        alt={post.title}
                                    />
                                    <p dangerouslySetInnerHTML={{  __html: post.content }}></p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4">
                        <h5 className="text-uppercase">
                            <i className="fa fa-book"></i> BERITA TERBARU
                        </h5>
                        <hr />
                        {loadingPost ? (
                            <Loading />
                        )}
                    </div>
                </div> {
                    
                }
            </div>
        </LayoutWeb>
    )
}