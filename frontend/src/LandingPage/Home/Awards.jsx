export default function Awards() {
    return (
        <div className="container p-3">
            <div className="row mb-5">
                <div className="col-md-5 row">
                    <img src="/media/images/largestBroker.svg" className="mx-auto" alt="press" style={{ width: "100%" }} />
                </div>
                <div className="col-md-7 mt-5">
                    <h2>Largest stock brocker in india</h2>
                    <p className="fs-5 my-4">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in : </p>
                    <div className="row my-4">
                        <div className="col-md-6">
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src="/media/images/pressLogos.png" alt="press" style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}