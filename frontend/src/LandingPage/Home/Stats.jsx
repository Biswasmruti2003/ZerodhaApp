export default function Stats() {
    return (
        <>
            <div className="container my-5">
                <div className="row p-3">
                    <div className="col-lg-5">
                        <h2 className="mt-5">Trust with confidence</h2>
                        <div className="mt-5 opacity-75">
                            <h4>Customer-first always</h4>
                            <p>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                        </div>
                        <div className="mt-4 opacity-75">
                            <h4>No spam or gimmicks</h4>
                            <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                        </div>
                        <div className="mt-4 opacity-75">
                            <h4>The Zerodha universe</h4>
                            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>
                        <div className="mt-4 opacity-75">
                            <h4>Do better with money</h4>
                            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </div>
                    </div>
                    <div className="col-lg-7 my-5 text-center">
                        <img src="/media/images/ecosystem.png" alt="ecosys" style={{ maxWidth: "80%" }} />
                        <div>
                            <a href="https://zerodha.com/products" className="link-Tag me-4">Explore our products <i className="bi bi-arrow-right"></i></a>
                            <a href="https://kite-demo.zerodha.com/" className="link-Tag">Try Kite demo <i className="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}