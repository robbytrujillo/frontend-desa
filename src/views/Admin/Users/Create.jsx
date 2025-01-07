// import react
import { useState, useEffect } from "react";

// import react router dom
import { Link, useNavigate } from "react-router-dom";

// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import Api
import Api from "../../../services/Api";

// import js cookie
import Cookies from "js-cookie";

// import toast
import toast from 'react-hot-toast';

export default function UserCreate() {
    // title page
    document.title = "Create User - Desa Digital";

    // navigate
    const navigate = useNavigate();

    // define state for from
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [rolesData, setRolesData] = useState([]);
    const [errors, setErrors] = useState([]);

    // define state "roles"
    const [roles, setRoles] = useState([]);

    // token from cookies
    const token = Cookies.get("token");

    // function "fetchDataRoles"
    const fetchDataRoles = async () => {
        await Api.get("/api/admin/roles/all", {
            // header
            headers: {
                // header Bearer + Token
                Authorization: `Bearer ${token}`,
            },    
        }).then((response) => {
            // set response data to state "roles"
            setRolesData(response.data.data);
        });
    };

    // useEffect
    useEffect(() => {
        // call function "fetchDataRoles"
        fetchDataRoles();
    }, []);

    // function "handleCheckboxChange"
    const handleCheckboxChange = (e) => {
        // define data
        let data = rolesData;

        // push data on state
        data.push(e.target.value);

        // set data to state
        setRolesData(data);
    };

    // function "storeUser"
    const storeUser = async (e) => {
        e.preventDefault();

        // sending data
        await Api.post(
            "/api/admin/users",
            {
                // data
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation,
                roles: rolesData,
            },
            {
                // header
                headers: {
                    // header Bearer + Token
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((response) => {
                // show toast
                toast.success(response.data.message, {
                    position: "top-right",
                    duration: 4000
                });

                // redirect
                navigate("/admin/users");
            })
            .catch((error) => {
                // set error message to state "errors"
                setError(error.response.data);
            });
        };

    return (
        <LayoutAdmin>
            <h1>Halaman Users Create</h1>
            <main>
                <div className="contaiener-fluid">
                    
                </div>
            </main>
        </LayoutAdmin>
    )
}