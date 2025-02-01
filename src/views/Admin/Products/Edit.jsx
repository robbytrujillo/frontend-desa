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
    
    return (
        <LayoutAdmin>
            <h1>Halaman Products Edit</h1>
        </LayoutAdmin>
    )
}