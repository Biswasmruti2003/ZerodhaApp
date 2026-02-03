

export default function LeftSection({ props  }) {
    let { imgSrc, title, desc, tryDemo, learn ,widthVal } = props;
    return (
        <div className="container mt-5 ">
            <div className="row ">
                <div className="col-lg-7 text-center">
                    <img src={imgSrc} style={{width : `${widthVal}`}} alt="Product"/>
                </div>
                <div className="col-lg-5 my-4 d-flex flex-column justify-content-center">
                    <h3>{title}</h3>
                    <p className="text-muted ">{desc}</p>
                    <div className="row">
                        <div className="col-4"><a href="https://rainmatter.com/" className="link-Tag">{tryDemo} {tryDemo ? <i className="bi bi-arrow-right"></i> : ""} </a></div>
                        <div className="col-4"> <a href="https://rainmatter.com/" className="link-Tag">{learn} {learn ? <i className="bi bi-arrow-right"></i> : ""}</a></div>
                    </div>
                    <div className="row my-4">
                        <div className="col-4"><a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/appstoreBadge.svg" alt="" /></a></div>
                        <div className="col-4"><a href="https://rainmatter.com/" className="link-Tag"><img src="/media/images/googlePlayBadge.svg" alt="" /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}