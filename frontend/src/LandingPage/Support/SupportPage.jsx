export default function SupportPage() {
    return (
        <>
            <div className="container my-5">
                <div className="d-flex my-2">
                    <h2>Support Portal</h2>
                    <button className="btn btn-primary ms-auto" style={{ minWidth: "150px" }}>My Tickets</button>
                </div>
                <form action="" className="d-flex">
                    <input type="text" className="px-3 fw-semibold" placeholder="Eg : How do i open my accout, How do i activate F&O..." style={{ width: "100%", height: "50px" }} />
                </form>

                {/* ROW */}
                <div className="row my-5">
                    <div className="col-lg-8 mb-5">
                        <div class="accordion" id="accordionExample">
                            {/* 1st */}
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="bi bi-plus-circle fs-5 me-2"></i>
                                        <strong>Acoount Opening</strong>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><a href="#" className="link-Tag">Resident individual</a></li>
                                            <li><a href="#" className="link-Tag">Minor</a></li>
                                            <li><a href="#" className="link-Tag"> Non Resident Indian (NRI)</a></li>
                                            <li><a href="#" className="link-Tag">Company, Partnership, HUF and LLP</a></li>
                                            <li><a href="#" className="link-Tag">Glossary</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 2nd */}
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <i class="bi bi-plus-circle fs-5 me-2"></i>
                                        <strong>Your Zerodha Account</strong>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><a href="#" className="link-Tag">Your Profile</a></li>
                                            <li><a href="#" className="link-Tag"> Account modification</a></li>
                                            <li><a href="#" className="link-Tag">Client Master Report (CMR) and Depository Participant (DP)</a></li>
                                            <li><a href="#" className="link-Tag">Nomination</a></li>
                                            <li><a href="#" className="link-Tag">Transfer and conversion of securities</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* 3rd */}
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <i class="bi bi-plus-circle fs-5 me-2"></i>
                                        <strong>Kite</strong>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <ul>
                                            <li><a href="#" className="link-Tag">IPO</a></li>
                                            <li><a href="#" className="link-Tag">Trading FAQs</a></li>
                                            <li><a href="#" className="link-Tag">Margin Trading Facility (MTF) and Margins</a></li>
                                            <li><a href="#" className="link-Tag">Charts and orders</a></li>
                                            <li><a href="#" className="link-Tag"> Alerts and Nudges</a></li>
                                            <li><a href="#" className="link-Tag">General</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="p-3 border-5 border-start border-warning bg-warning bg-opacity-10">
                            <ul>
                                <li><a href="#">Special live trading session on Sunday, February 1, 2026</a></li>
                                <li><a href="#">Adjustment of F&O contracts of GAIL due to dividend</a></li>
                            </ul>
                        </div>
                        <div className=" my-3 border flex flex-col">
                            <div className="p-3 fs-6 fw-semibold border-bottom bg-secondary bg-opacity-10">Quick links</div>
                            <div className="p-3 border-bottom"><a href="#" className="link-Tag">1. Track account opening</a></div>
                            <div className="p-3 border-bottom"><a href="#" className="link-Tag">2. Track segment activation</a></div>
                            <div className="p-3 border-bottom"><a href="#" className="link-Tag">3. Intraday margins</a></div>
                            <div className="p-3 border-bottom"><a href="#" className="link-Tag">4. Kite user manual</a></div>
                            <div className="p-3 "><a href="#" className="link-Tag">5. Learn how to create a ticket</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}