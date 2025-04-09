import React from "react";

export default function footer() {
    return (
        <footer>
            <div className="container-fluif footer-top">
                <div className="row p-4">
                    <div className="col-md-4 mb-4 mt-3">
                        <h5>
                            TENTANG
                            <strong style={{ color: "#ffd22e" }}> DESA DIGITAL </strong>
                        </h5>
                        <hr />
                        <div className="text-center">
                            <img src="/images/desa-digi.png" width="70"></img>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}