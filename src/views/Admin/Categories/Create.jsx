// import react
import { useState } from "react";

// import react router dom
import { Link, useNavigate } from "react-router-dom";

// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from "js-cookie";

// import toast
import toast from "react-hot-toast";


export default function CategoriesCreate() {
    // title page
    document.title = "Create Category - Desa Digital";

    // navigate
    const navigate = useNavigate();

    // define state for from
    const [name, setName] = useState("");
    const [errors, setErros] = useState([]);

    // token from cookies
    const token = Cookies.get("token");

    // function "storeCategory"
    const storeCategory = async (e) => {
        e.preventDefault();

        // sending data
        await Api.post(
            "/api/admin/categories",
            {
                // data
                name: name,
            },
            {
                // header
                headers: {
                    // header Bearer + Token
                    Authorization: `Bearer ${token}`,
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
                    navigate("/admin/categories");
                })
                .catch((error) => {
                    // set error message to state "errors"
                    setErros(error.response.data);
                });
            };

    return (
        <LayoutAdmin>
            <h1>Halaman Categories Create</h1>
        </LayoutAdmin>
    );
}