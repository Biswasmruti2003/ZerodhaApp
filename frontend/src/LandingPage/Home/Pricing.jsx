export default function Pricing() {
    return (
        <div className="container my-5">
            <div className="row my-5">
                <div className="col-lg-5 p-3">
                    <h2 className="my-2">Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="https://zerodha.com/charges/" className="link-Tag">See pricing <i className="bi bi-arrow-right"></i></a>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 row d-flex flex-wrap">
                    <div className="col-md-4 d-flex flex-wrap align-items-center ">
                        <img src="/media/images/intradayTrades.svg" alt="" style={{ maxWidth: "120px" }} />
                        <p className="m-0 opacity-75">Free account opening</p>
                    </div>
                    <div className="col-md-4 d-flex flex-wrap align-items-center">
                        <img src="/media/images/pricingMF.svg" alt="" style={{ maxWidth: "120px" }} />
                        <p className="m-0 opacity-75">Free equity delivery <br />and direct mutual funds</p>
                    </div>
                    <div className="col-md-4 d-flex flex-wrap align-items-center">
                        <img src="/media/images/pricingEquity.svg" alt="" style={{ maxWidth: "120px" }} />
                        <p className="m-0 opacity-75">Intraday and<br />F&O</p>
                    </div>
                </div>
            </div>
        </div >
    )
}