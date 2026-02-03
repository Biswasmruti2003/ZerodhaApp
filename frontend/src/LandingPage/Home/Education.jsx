
export default function Education() {
    return (
        <div className="container">
            <div className="row my-5 ">
                <div className="col-md-6  text-center">
                    <img src="media/images/education.svg" alt=""  style={{ maxWidth: "70%" }}  />
                </div>
                <div className="col-md-6 py-5">
                    <h2 className="my-2">Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p><a href='https://zerodha.com/varsity' className='link-Tag fw-semibold'>Varsity<i className="bi bi-arrow-right"></i></a></p>

                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p><a href='https://tradingqna.com/' className='link-Tag fw-semibold'>TradingQ&A <i className="bi bi-arrow-right"></i></a></p>
                </div>
            </div>
        </div>
    )
}