import { Nav, Div1, Navlink } from "./HeaderStyles";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <Nav>
            <img
                onClick={() => window.location.replace("/")}
                src={Logo}
                alt="logo"
                style={{ width: "6rem", height: "6rem" }}
            />
            <Div1>
                <Link
                    to="#"
                    onClick={() => window.location.replace("/#Projects")}
                >
                    <Navlink>Projects</Navlink>
                </Link>
                <Link to="#" onClick={() => window.location.replace("/#About")}>
                    <Navlink>About</Navlink>
                </Link>
                <Link
                    to="#"
                    onClick={() => window.location.replace("/#Footer")}
                >
                    <Navlink>Contact</Navlink>
                </Link>
            </Div1>
        </Nav>
    );
};

export default Header;
