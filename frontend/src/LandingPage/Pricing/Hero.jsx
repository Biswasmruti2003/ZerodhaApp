export default function Hero() {
    return (
        <>
            <div className="container py-5">
                <div className="row text-center ">
                    <h2 className="text-muted">Charges</h2>
                    <h4 className="text-muted">List of all charges and taxes</h4>
                </div>
            </div>
            <div className="container" style={{ minHeight: "25vh" }}>
                <div className="row my-5 px-md-5" >
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/pricingMF.svg" alt="" style={{ width: "70%" }} /></a>
                        <h2 className="text-muted">Free equity delivery</h2>
                        <p className="text-muted p-3">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/intradayTrades.svg" alt="" style={{ width: "70%" }} /></a>
                        <h2 className="text-muted">Intraday and F&O trades</h2>
                        <p className="text-muted p-3">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                    </div>
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/pricingEquity.svg" alt="" style={{ width: "70%" }} /></a>
                        <h2 className="text-muted">Free direct MF</h2>
                        <p className="text-muted p-3">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>
        </>

    )
}