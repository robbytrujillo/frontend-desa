// import hook
import { useState, useEffect } from "react";

// import Layout
import LayoutAdmin from "../../../layouts/Admin";

// import service api
import Api from "../../../services/api";

// import js cookie
import Cookies from "js-cookie";

// import Link
import { Link } from "react-router-dom";

export default function Dashboard() {
    // title page
    document.title = "Dashboard - Desa Digital";

    // init state
    const [countCategories, setCountCategories] = useState(0);
    const [countPosts, setCountPosts] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const [countAparaturs, setCountAparaturs] = useState(0);

    // token from cookies
    const token = Cookies.get("token");

    // hook useEffect
    useEffect(() => {
        // fetch api
        Api.get("/api/admin/dashboard", {
            // header
            headers: {
                // header Bearer + Token
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            // set data
            setCountCategories(response.data.data.categories);
            setCountPosts(response.data.data.posts);
            setCountProducts(response.data.data.products);
            setCountAparaturs(response.data.data.aparaturs);
        });
    }, []);

    return (
        <LayoutAdmin>
            {/* <h1>Halaman Dashboard</h1> */}
            <main>
                <div class="container-fluid px-4 mt-5">
                    <div class="row">
                        
                    </div>
                </div>
            </main>
        </LayoutAdmin>
    );
}