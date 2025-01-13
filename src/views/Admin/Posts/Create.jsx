// import react
import { useState, useEffect } from "react";

// import react router dom
import { Link, useNavigate } from "react-router-dom";

// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from "js-cookie";

// import toast
import toast from "react-hot-toast"

// import react Quill
import ReactQuill from 'react-quill';

// quill CSS
import 'react-quill/dist/quill.snow.css';

export default function PostsCreate() {
    return (
        <LayoutAdmin>
            <h1>Halaman Posts Create</h1>
        </LayoutAdmin>
    );
}