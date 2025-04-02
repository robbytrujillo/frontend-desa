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

export default function AparatursCreate() {
    // title page
    document.title = "Create Aparatur - Desa Digital";

    // navigate
    const navigate = useNavigate();

    // define state for form
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [role, setRole] = useState("");
    const [errors, setErros] = useState([]);

    // token from cookies
    const token = Cookies.get("token");

    // function "storeAparatur"
    const storeAparatur = async (e) => {
        e.preventDefault();

        // define formData
        const formData = new FormData();

        // append data to "formData"
        formData.append("image", image);
        formData.append("name", name);
        formData.append("role", role);

        // sending data
        await Api.post("/api/admin/aparaturs",  formData, {
            // header
            headers: {
            // header Bearer
            Authorization: `Bearer ${token}`,
            "content-type": "multipart/form-data",
        },
    })
        .then((response) => {
            // show toast
            toast.success(response.data.message, {
                position: "top-right",
                duration: 4000,
            });

            // redirect
            navigate("/admin/aparaturs");
        })
        .catch((error) => {
            // set error message to state "errors"
            setErros(error.response.data);
        });
    };

    return (
        <LayoutAdmin>
            {/* <h1>Halaman Aparaturs Create</h1> */}
            <main>
                <div className="container-fluid mb-5 mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <Link
                                to="/admin/aparaturs"
                                className="btn btn-md btn-primary border-0 shadow-sm mb-3"
                                type="button"
                            >
                                <i className="fas fa-long-arrow-alt-left me-2"></i> Back
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAdmin>
    );
}