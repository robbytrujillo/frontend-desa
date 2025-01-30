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

// import react Quill
import ReactQuill from "react-quill";

// quill CSS
import "react-quill/dist/quill.snow.css";

export default function ProductsCreate() {
    // title page
    document.title = "Create Product - Desa Digital";

    // navigate
    const navigate = useNavigate();

    // define state for from
    const [image, setImage]     = useState("");
    const [title, setTitle]     = useState("");
    const [content, setContent] = useState("");
    const [owner, setOwner]     = useState("");
    const [price, setPrice]     = useState("");
    const [address, setAddress]   = useState("");
    const [phone, setPhone]     = useState("");
    const [errors, setErros]   = useState([]);

    // token from cookies
    const token = Cookies.get("token");

    // function "storeProduct"
    const storeProduct = async (e) => {
        e.preventDefault();
        
        // define fromData
        const formData = new FormData();

        // append data to "formData"
        formData.append("image", image);
        formData.append("title", title);
        formData.append("owner", owner);
        formData.append("price", price);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("content", content);

        // sending data
        await Api.post("/api/admin/products", formData, {
            // header
            headers: {
                // header Bearer + Token
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
                navigate("/admin/products");
            })
            .catch((error) => {
                // set error message to state "errors"
                setErros(error.response.data);
            });
        }        

    return (
        <LayoutAdmin>
            <h1>Halaman Products Create</h1>
            <main>
                <div className="container-fluid mb-5 mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <Link
                                to="/admin/products"
                                className="btn btn-md btn-primary border-0 shadow-sm mb-3" 
                                type="button"
                            >
                                <i className="fa fa-long-arrow-alt-left me-2"></i> Back
                            </Link>
                            <div className="card border-0 rounded shadow-sm border-top-success">
                                <div className="card-body">
                                    <h6>
                                        <i className="fa fa-pencil-alt"></i>
                                    </h6>
                                    <hr />
                                    <form onSubmit={storeSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Image</label>
                                            <input 
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={(e) => setImage(e.target.files[0])}
                                            />
                                        </div>
                                        {errors.image && (
                                            <div className="alert alert-danger">
                                                {errors.image[0]}
                                            </div>
                                        )}

                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label fw-bold">Title</label>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAdmin>
    );
}