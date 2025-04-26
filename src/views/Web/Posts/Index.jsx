// import React
import React, { useState, useEffect } from "react";

// import layout
import LayoutWeb from "../../../layouts/Web";

// import service api
import Api from "../../../services/Api";

// import component alert
import AlertDataEmpty from "../../../components/general/AlertDataEmpty";

// import component loading
import Loading from "../../../components/general/Loading";

// import component card post
import CardPost from "../../../components/general/CardPost";

// import pagination component
import Pagination from "../../../components/general/Pagination";


export default function WebPostsIndex() {
    return (
        <LayoutWeb>
            <h1>Halaman Posts Index</h1>
        </LayoutWeb>
    )
}
