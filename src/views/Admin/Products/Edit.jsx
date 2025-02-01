// import react
import { useState, useEffect } from "react";

// import react router dom
import { Link, useNavigate, useParams } from "react-router-dom";

// import Layout
import LayoutAdmin from "../../../layouts/Admin";

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from "js-cookie";

// import toast
import toast from "react-hot-toast";

// import react Quill
import ReactQuill from "react-quill";

// quill CSS
import "react-quill/dist/quill.snow.css";

export default function ProdutsEdit() {
    // title page
    document.title = "Product Edit - Desa Digital";

    // navigate
    const navigate = useNavigate();


    return (
        <LayoutAdmin>
            <h1>Halaman Products Edit</h1>
        </LayoutAdmin>
    )
}