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

// import components card product
import CardProduct from "../../../components/general/CardProduct";

// import pagination component
import Pagination from "../../../components/general/Pagination";

export default function WebProductsIndex() {
    return (
        <LayoutWeb>
            <h1>Halaman Products Index</h1>
        </LayoutWeb>
    )
}