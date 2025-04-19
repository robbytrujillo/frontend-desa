
// import React
import React, { useState, useEffect } from "react";

// import layout
import LayoutWeb from "../../../layouts/Web";

// import service api
import Api from "../../../services/api";

// import component aler
import AlertDataEmpty from "../../../components/general/AlertDataEmpty";

// import component loading
import Loading from "../../../components/general/Loading";

// import component card page
import CardPage from "../../../components/general/CardPage";

export default function WebPagesIndex() {
    // title page
    document.title = "Tentang Desa - Desa Digital";

    // init state
    const [pages, setPages] = useState([]);
    const [loadingPages, setLoadingPages] = useState(true);

    // fetch data pages
    const fetchDataPages = async () => {
        // setLoadingPages "true"
        setLoadingPages(true);

        // fetch data
        await Api.get("/api/public/pages").then((response) => {
            // assign response to state
            setPages(response.data.data);

            // setLoadingPages "false"
            setLoadingPages(false);
        });
    }

    // hook useEffect
    useEffect(() => {
        // call function "fetchDataPages"
        fetchDataPages();
    }, []);

    return (
        <LayoutWeb>
            {/* <h1>Halaman Pages Index</h1> */}
            <div className="container mt-4 mb-3">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="text-uppercase">
                            <i className="fa fa-info-circle"></i> TENTANG DESA
                        </h5>
                        <hr />
                    </div>
                </div>
                
            </div>
        </LayoutWeb>
    );
}