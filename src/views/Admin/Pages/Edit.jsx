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

export default function PagesEdit() {
    // title page
    document.title = "Edit Page | Desa Digital";

    // navigate
    const navigate = useNavigate();

    // get ID from parameter URL
    const { id } = useParams();

    // define state for forw
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErros] = useState([]);

    // token from cookies
    const token = Cookies.get("token");

    // function "fetchDataPage"
    const fetchDataPage = async () => {
        await Api.get(`/api/admin/pages/${id}`, {
            // header
            headers: {
                // header Beare + Token
                "Authorization": `Bearer ${token}`,
            },
        }).then((response) => {
            // set response data to state
            setTitle(response.data.data.title);
            setContent(response.data.data.content);
        });
    };

    // hook useEffect
    useEffect(() => {
        // call function "fetchDataPage"
        fetchDataPage();
    }, []);

    // function "updatePage"
    const updatePage = async (e) => {
        e.preventDefault();
        
        // sending data
        await Api.put(
            `/api/admin/pages/${id}`,
             {
                // data
                title: title,
                content: content,
                _method: "PUT",
            },
            {
                // header
                headers: {
                    // header Beare + Token
                    "Authorization": `Bearer ${token}`,
                    "content-type": "multipart/form-data",
                },
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
            // set error message to state "errrors"
            setError(error.response.data);
        });
    };

    return (
        <LayoutAdmin>
            <h1>Halaman Pages Edit</h1>
            <main>
                
            </main>
        </LayoutAdmin>
    );
}