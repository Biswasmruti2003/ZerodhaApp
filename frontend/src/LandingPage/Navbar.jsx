import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-light border-bottom">
            <div class="container my-1">
                <Link class="navbar-brand" to="/home"><img src="/media/images/logo.svg" alt="logo" style={{maxWidth : "160px"}} /></Link>
                <button class="navbar-toggler fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold opacity-75 ">
                        <li class="nav-item mx-3">
                            <Link class="nav-link " aria-current="page" to="/signup">SignUp</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mx-3" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mx-3" to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mx-3" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link mx-3" to="/supports">Support</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}