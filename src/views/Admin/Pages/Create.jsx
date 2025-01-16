// import react
import { useState } from "react";

// import react router dom
import { Link, useNavigate } from 'react-router-dom';

// import Layout
import LayoutAdmin from "../../../layouts/Admin";

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from 'js-cookie';

// import toast
import toast from "react-hot-toast";

// import react Quill
import ReactQuill from 'react-quill';

// quil CSS
import 'react-quill/dist/quill.snow.css';

export default function PagesCreate() {
    // title page
    document.title = "Create Page - Desa Digital";

    // navigate
    const navigate = useNavigate();

    // define state for from
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErros] = useState([]);

    // token from cookies
    const token = Cookies.get('token');

    // function "storePage"
    const storePage = async (e) => {
        e.preventDefault();

        // sending data
        await Api.post(
            "/api/admin/pages",
            {
                // data
                title: title,
                content: content,
            },
            {
                // header
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "content-type": "multipart/form-data",
            }
        }
    )
        .then((response) => {
            // show toast
            toast.success(response.data.message, {
                position: "top-right",
                duration: 4000,
            });

            // redirect
            navigate("/admin/pages");
        })
        .catch((error) => {
            // set error message to state "errors"
            setErros(error.response.data);
        })
    };

    return (
        <LayoutAdmin>
            <h1>Halaman Pages Create</h1>
            <main>
                
            </main>
        </LayoutAdmin>
    )
}