// import React
import React, { useState, useEffect } from react;

// import layouts
import LayoutWeb from "../../../layouts/Web";

// import service api
import Api from "../../../services/api";

// import useParams
import { useParams } from "react-router-dom";

// import component loading
import Loading from "../../../components/Loading";

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
        </LayoutWeb>
    );
}