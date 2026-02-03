
export default function RightSection({ props }) {
    let { imgSrc, title, desc, tryDemo,widthVal} = props;
    return (
        <div className="container p-lg-5">
            <div className="row flex-wrap-reverse ">
                <div className="col-lg-5 mt-4 d-flex flex-column justify-content-center">
                    <h3>{title}</h3>
                    <p className="text-muted ">{desc}</p>
                    <div className="row">
                        <div className="col"><a href="https://rainmatter.com/" className="link-Tag">{tryDemo} {tryDemo ? <i className="bi bi-arrow-right"></i> : ""} </a></div>
                    </div>
                </div>
                <div className="col-lg-7 text-center">
                    <img src={imgSrc}  style={{width : `${widthVal}`}} alt="Product Image" />
                </div>
            </div>
        </div>
    )
}