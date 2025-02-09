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

    // get ID from parameter URL
    const { id } = useParams();

    // define state for from
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [owner, setOwner] = useState("");
    const [price, setPrice] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErros] = useState([]);

    // token from cookies
    const token = Cookies.get("token");

    // function "fetchDataProduct"
    const fetchDataProduct = async () => {
        await Api.get(`/api/admin/products/${id}`, {
            // header
            headers: {
                // header Bearer + Token
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            // set response data to state
            setTitle(response.data.data.title);
            setContent(response.data.data.content);
            setOwner(response.data.data.owner);
            setPrice(response.data.data.price);
            setAddress(response.data.data.address);
            setPhone(response.data.data.phone);
        });
    };

    // hook "useEffect"
    useEffect(() => {
        // call function "fetchDataProduct"
        fetchDataProduct();
    }, []);

    // function "updateProduct"
    const updateProduct = async (e) => {
        e.preventDefault();

        // define formData
        const formData = new FormData();

        // append data to "formData"
        formData.append("image", image);
        formData.append("title", title);
        formData.append("owner", owner);
        formData.append("price", price);
        formData.append("address", address);
        formData.append("phone", phone);
        formData.append("content", content);
        formData.append("_method", "PUT");

        // sending data
        await Api.put(`/api/admin/products/${id}`, formData, {
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
    };    
    
    return (
        <LayoutAdmin>
            {/* <h1>Halaman Products Edit</h1> */}
            <main>
                <div className="container-fluid mb-5 mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/admin/products" className="btn btn-md btn-primary border-0 shadow-sm mb-3"
                            type="button"
                            >
                                <i className="fa fa-long-arrow-alt-left me-2"></i> Back
                            </Link>
                            <div className="card border-0 rounded shadow=-sm border-top-success">
                                <div className="card-body">
                                    <h6>
                                        <i className="fa fa-pencil-alt"></i> Edit Product
                                    </h6>
                                    <hr />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAdmin>
    )
}