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

    return (
        <LayoutAdmin>
            <h1>Halaman Aparaturs Edit</h1>
        </LayoutAdmin>
    );
}