export default function Hero() {
    return (
        <div className="container my-5">
            <div className="row  text-center ">
                <img src="/media/images/homeHero.png" alt="Hero" className="mb-5" />
                <h2>Invest in everything</h2>
                <p className="fs-5 mt-2 mb-4">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary mb-5" style={{ maxWidth: "200px", margin: "auto" }}>Sign up for free</button>
            </div>
        </div>
    )
}