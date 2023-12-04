import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav nav-tabs mb-2">
            <Link className="nav-link" to="/project/home">
                Home</Link>
            <Link className="nav-link" to="/">
                Search</Link>
            <Link className="nav-link" to="/project/signin">
                Sign In</Link>
            <Link className="nav-link" to="/project/signup">
                Sign up</Link>
            <Link className="nav-link" to="/project/account">
                Account</Link>
        </nav>
    );
}


export default Nav;