import { Link } from "react-router-dom"
export default function NotFound() {
    return (
        <div className="container">
            <h1>404 Page Not Found</h1>
            <p>We couldn't find the page you were looking for.</p>
            <p> Visit Zerodha's <Link to="/home" >home page</Link></p>
        </div>
    )
}