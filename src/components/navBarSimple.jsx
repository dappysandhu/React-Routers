import { Link } from "react-router-dom";

const NavBar = () => {
    return (<nav><ul className="nav">
        <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="events">Events</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="products">Products</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="contact">Conatct Us</Link>
        </li>
    </ul></nav>);
}

export default NavBar;