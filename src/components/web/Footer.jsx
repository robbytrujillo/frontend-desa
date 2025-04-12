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
                        <p className="text-justify mt-3">
                            Desa Digital merupakan desa yang terletak di kabupaten Bogor dan 
                            desa ini kebanyakan berada di kawasan Industri Teknologi Informasi.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4 mt-3">
                        <h5>
                            DOWNLOAD <strong style={{ color: "#ffd22e" }}> APLIKASI</strong>
                        </h5>
                        <hr />
                        <div className="text-left">
                            <img 
                                src="/images/playstore.png"
                                width={"180"}
                                className="text-center align-items-center"
                            />
                        </div>
                        <p className="text-justify mt-2 text-left">
                            Dapatkan info update Desa lebih cepat melalui aplikasi android.
                            Silahkan unduh melalui playstore.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4 mt-3">
                        <h5>
                            KONTAK <strong style={{ color: "#ffd22e" }}>DESA</strong>
                        </h5>
                        <hr />
                        <p>
                            <i className="fa fa-map-marker"></i> 
                             Bukit Golf Arcadia Blok E Bojong Nangka, Gunung Putri, Bogor, Jawa Barat
                            <br />
                            <br />
                            <i className="fas fa-envelope"></i> info@desa-digital.comments
                            <br />
                            <br />
                            <i className="fas fa-phone"></i> +62 813-6794-3830
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid footer-bottom">
                <div className="row p-3">
                    <div className="text-center text-white font-weight-bold">
                        Copyright @ 2025 DESA DIGITAL. All Rights Reserved.
                    </div> 
                </div>
            </div>
        </footer>
    );
}