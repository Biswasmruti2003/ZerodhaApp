export default function Brokage() {
    return (
        <>
            <div className="container p-3 p-xl-0 table-responsive-lg">
                <table className="table table-bordered table-striped align-middle text-center ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Equity delivery</th>
                            <th>Equity intraday</th>
                            <th>F&O - Futures</th>
                            <th>F&O - Options</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <tr>
                            <td>Brokerage</td>
                            <td>Zero Brokerage</td>
                            <td>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td>0.03% or Rs. 20/executed order whichever is lower</td>
                            <td>Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr>
                            <td>STT/CTT</td>
                            <td>0.1% on buy & sell</td>
                            <td>0.025% on the sell side</td>
                            <td>0.02% on the sell side</td>
                            <td>
                                <ul>
                                    <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                    <li>0.1% on sell side (on premium) </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Transaction charges</td>
                            <td>
                                <ul>
                                    <li>NSE: 0.00297%</li>
                                    <li> BSE: 0.00375%</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>NSE: 0.00297%</li>
                                    <li>BSE: 0.00375%</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>NSE: 0.00173%</li>
                                    <li>BSE: 0</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>NSE: 0.03503% (on premium)</li>
                                    <li>BSE: 0.0325% (on premium)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>GST</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td>SEBI charges</td>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                            <td>₹10 / crore</td>
                        </tr>
                        <tr>
                            <td>Stamp charges</td>
                            <td>0.015% or ₹1500 / crore on buy side</td>
                            <td>0.003% or ₹300 / crore on buy side</td>
                            <td>0.002% or ₹200 / crore on buy side</td>
                            <td>0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="container">
                <div className="row my-5">
                    <h4>Disclaimer </h4>
                    <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                </div>
            </div>
        </>
    )
}