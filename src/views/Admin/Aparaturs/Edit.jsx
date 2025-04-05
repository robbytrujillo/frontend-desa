// import react
import { useState, useEffect } from "react";

// import react router dom
import { Link, useNavigate, useParams } from "react-router-dom";

// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from 'js-cookie';

// import toast
import toast from "react-hot-toast";

export default function AparatursEdit() {
    // title page
    document.title = "Edit Aparatur - Desa Digital";

    // navigate
    const navigate = useNavigate();

    // get ID from parameter URL
    const { id } = useParams();

    // define state for form
    const [name, setName] = useState("");
    const [image, setImge] = useState("");
    const [role, setRole] = useState("");
    const [errors, setErros] = useState([]);

    // token from cookies
    const token = Cookies.get("token");

    // function fetchDataAparatur
    const fetchDataAparatur = async () => {
        await Api.get(`/api/admin/aparaturs/${id}`, {
            // header
            headers: {
                // header Bearer + Token
                "Authorization": `Bearer ${token}`,
            },
        }).then((response) => {
            // set response data to state
            setName(response.data.data.name);
            setRole(response.data.data.role);
        });
    };

    // useEffect
    useEffect(() => {
        // call function "fetchDataAparatur"
        fetchDataAparatur();
    }, []);

    // function "updateAparatur"
    const updateAparatur = async (e) => {
        e.preventDefault();

        // define formData
        const formData = new FormData();

        // append data to "formData"
        formData.append("image", image);
        formData.append("name", name);
        formData.append("role", role);
        formData.append("_method", "PUT");

        // sending data
        await Api.put(`/api/admin/aparaturs/${id}`, formData, {
            // header
            headers: {
                // header Bearer + Token
                "Authorization": `Bearer ${token}`,
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
            setErrors(error.response.data);
        });
    };

    return (
        <LayoutAdmin>
            {/* <h1>Halaman Aparaturs Edit</h1> */}
            <main>
                <div className="container-fluid mb-5 mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <Link
                                to="/admin/aparaturs"
                                className="btn byn-md btn-primary border-0 shadow-sm mb-3"
                                type="button"
                            >
                                <i className="fa fa-long-arrow-alt-left me-2"></i> Back
                            </Link>
                            <div className="card border-0 rounded shadow-sm border-top-success">
                                <div className="card-body">
                                    <h6>
                                        <i className="fa fa-pencil"></i> Edit Aparatur
                                    </h6>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAdmin>
    );
}