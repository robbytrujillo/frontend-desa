
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
    return (
        <LayoutWeb>
            <h1>Halaman Pages Index</h1>
        </LayoutWeb>
    );
}