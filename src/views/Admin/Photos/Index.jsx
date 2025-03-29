// import layout
import LayoutAdmin from "../../../layouts/Admin";

// import useState adn useEffect
import { useState, useEffect } from "react";

// import api
import Api from "../../../services/Api";

// import js cookie
import Cookies from "js-cookie";

// import permissions
import hasAnyPermission from "../../../utils/Permissions";

// import pagination componet
import Pagination from "../../../components/general/Pagination";

export default function PhotosIndex() {
    // title page
    document.title = "Photos - Desa Digital";

    // define state "photos"
    const [photos, setPhotos] = useState([]);

    // define state "pagination"
    const [pagination, setPagination] = useState({ 
        currentPage: 0,
        perPage: 0,
        total: 0
    });

    // define state "keywords"
    const [keywords, setKeywords] = useState("");

    // token from cookies
    const token = Cookies.get("token");

    // function fetchData
    const fetchData = async (pageNumber = 1, keywords = "") => {
        // define variable "page"
        const page = pageNumber ? pageNumber : pagination.currentPage;

        await Api.get(`/api/admin/photos?search=${keywords}&page=${page}`, {
            // header
            headers: {
                // header Bearer + Token
                "Authorization": `Bearer ${token}`,
            },
        }).then((response) => {
            // set data response to state "setPosts"
            setPhotos(response.data.data.data);

            // set data pagination to state "pagination"
            setPagination(() => ({
                currentPage: response.data.data.current_page,
                perPage: response.data.data.per_page,
                total: response.data.data.total
            }));
        });
    };

    // useEffect
    useEffect(() => {
        // call function "fetchData"
        fetchData();
    }, []);

    // function "searchData"
    const searchData = async (e) => {
        // set value to state "keyword"
        setKeywords(e.target.value);

        // call function "fetchData"
        fetchData(1, e.target.value);
    };

    return (
        <LayoutAdmin>
            {/* <h1>Halaman Photos Index</h1> */}
            <main>
                <div className="container-fluid mb-5 mt-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-9 col-12 mb-2">
                                    <div className="input-group">
                                        <input 
                                            type="text" 
                                            className="form-control border-0 shadow-sm"
                                            onChange={(e) => searchData(e)} 
                                            placeholder="search here..." 
                                        />
                                        <span className="input-group-text border-0 shadow-sm">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col-md-12">
                            <div className="card border-0 rounded shadow-sm border-top-success">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-centered mb-0 rounded">
                                            <thead className="thead-dark">
                                                <tr className="border-0">
                                                    <th className="border-0" style={{ width: "5%" }}>No</th>
                                                    <th className="border-0">Image</th>
                                                    <th className="border-0">Caption</th>
                                                    <th className="border-0" style={{ width: "15%" }}>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    // cek apakah data ada
                                                    photos.length > 0 ? (
                                                        // looping data "photos" dengan "map"
                                                        photos.map((photo, index) => (
                                                            <tr key={index}>
                                                                <td className="fw-bold text-center">
                                                                    {++index + (pagination.currentPage - 1) * pagination.perPage}
                                                                </td>
                                                                <td className="text-center">
                                                                    <img src={photo.image} width={"300px"} className="rounded" />
                                                                </td>
                                                                <td>{photo.caption}</td>
                                                                <td className="text-center">
                                                                    {hasAnyPermission(["posts.delete"]) && (
                                                                        <button className="btn btn-danger btn-sm">
                                                                            <i className="fa fa-trash"></i>
                                                                        </button>
                                                                    )}
                                                                </td>
                                                            </tr> 
                                                        ))
                                                    ) : (
                                                        // tampilkan pesan data belum tersedia
                                                        <tr>
                                                            <td colSpan={5}>
                                                                <div
                                                                    className="alert alert-danger border-0 rounded shadow-sm w-100 text-center"
                                                                    role="alert"
                                                                >
                                                                    Data Belum Tersedia!
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <Pagination
                                        currentPage={pagination.currentPage}
                                        perPage={pagination.perPage}
                                        total={pagination.total}
                                        onChange={(pageNumber) => fetchData(pageNumber, keywords)}
                                        position="end"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </LayoutAdmin>
    );
}