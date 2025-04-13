// import React 
import React from "react";

// import money format
import MoneyFormat from "../../utils/MoneyFormat";

// import link
import { Link } from "react-router-dom";

export default function CardProduct(props) {
    return (
        <div className="col-md-4 mb-3" key={props.key}>
            <Link to={`/products/${props.slug}`} className="text-decoration-none">
                <div class="card mb-3 w-100 rounded-3 border-0 shadow-sm">
                    <img src={props.image} class="card-img-top" alt="..." />
                </div>
            </Link>
        </div>
    )
}