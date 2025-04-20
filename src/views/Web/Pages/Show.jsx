// import React
import React, { useState, useEffect } from "react";

// import layouts
import LayoutWeb from "../../../layouts/Web";

// import service api
import Api from "../../../services/api";

// import useParams
import { useParams } from "react-router-dom";

// import component loading
import Loading from "../../../components/general/Loading";

export default function WebPagesShow() {
    // init state
    const [page, setPage] = useState({});
    const [loadingPage, setLoadingPage] = useState(true);

    // destruct id
    const { slug } = useParams();

    // fetch data page
    const fetchDetailDataPage = async () => {
        // setLoadingPages "true"
        setLoadingPage(true);

        // fetch data
        await Api.get(`/spi/public/pages/${slug}`).then((response) => {
            // assign response to state "pages"
            setPage(response.data.data);

            // title page
            document.title = `${response.data.data.title} - Desa Digital`;

            // setLoadingPages "false"
            setLoadingPage(false);
        });
    };

    // hook useEffevt
    useEffect(() => {
        // call method "fetchDataPages"
        fetchDetailDataPage();
    }, []);

    return (
        <LayoutWeb>
            {/* <h1>Halaman Page Show</h1> */}
            <div className="container mt-4 mb-3">
                {loadingPage ? (
                    <Loading />
                ) : (
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-uppercase">
                            <i className="fa fa-info-circle"></i> {page.title}
                            </h4>
                            <hr />
                            <div className="card border-0 shadow-sm rounded-3">
                                <div className="card-body post-content">
                                    <p dangerouslySetInnerHTML={{  __html: page.content }}></p>
                                </div>
                            </div> 
                        </div>
                    </div>
                )}
            </div>
        </LayoutWeb>
    );
}