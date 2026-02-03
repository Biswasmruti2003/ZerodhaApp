import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";


export default function ProductPage() {
    let leftArr = [
        {
            imgSrc: "/media/images/kite.png",
            widthVal: "80%",
            title: "Kite",
            desc: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
            tryDemo: "Try demo",
            learn: " Learn more",
        },
        {
            imgSrc: "/media/images/products-coin.png",
            widthVal: "80%",
            title: "Coin",
            desc: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
            tryDemo: "Coin",
            learn: null,
        },
        {
            imgSrc: "/media/images/varsity.svg",
            widthVal: "60%",
            title: "Varsity mobile",
            desc: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
            tryDemo: null,
            learn: null,
        },
    ];
    let rightArr = [
        {
            imgSrc: "/media/images/console.png",
            widthVal: "70%",
            title: "Console",
            desc: "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.",
            tryDemo: "Learn more ",
        },
        {
            imgSrc: "/media/images/kiteconnect.png",
            widthVal: "85%",
            title: "Kite Connect API",
            desc: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
            tryDemo: "Kite Connect ",
        }
    ]
    return (
        <>
            <Hero />
            <LeftSection props={leftArr[0]} />
            <RightSection props={rightArr[0]} />
            <LeftSection props={leftArr[1]} />
            <RightSection props={rightArr[1]} />
            <LeftSection props={leftArr[2]} />
            <div className="container p-lg-5">
                <div className="row text-center ">
                    <h5 className="my-5 text-muted">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
                    <h3 className="my-4">The Zerodha Universe</h3>
                    <h6>Extend your trading and investment experience even further with our partner platforms</h6>
                </div>
                <div className="row my-5  px-md-5">
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/zerodhaFundhouse.png" alt="" style={{ width: "50%" }} /></a>
                        <p className="text-muted p-3">Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    </div>
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/sensibullLogo.svg" alt="" style={{ width: "50%" }} /></a>
                        <p className="text-muted p-3">Options trading platform that lets you create strategies, analyze positions, and examine points like open interest, FII/DII, and more.</p>
                    </div>
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/tijori.svg" alt="" style={{ width: "40%" }} /></a>
                        <p className="text-muted p-3">Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more.</p>
                    </div>
                </div>
                <div className="row  px-md-5">
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/smallcaseLogo.png" alt="" style={{ width: "50%" }} /></a>
                        <p className="text-muted p-3">Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                    </div>
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/streakLogo.png" alt="" style={{ width: "40%" }} /></a>
                        <p className="text-muted p-3">Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                    </div>
                    <div className="col-md-4 px-4 text-center">
                        <a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/dittoLogo.png" alt="" style={{ width: "40%" }} /></a>
                        <p className="text-muted p-3">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
