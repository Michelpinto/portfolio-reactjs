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
                <Navlink onClick={() => window.location.replace("/#Projects")}>
                    Projects
                </Navlink>

                <Navlink onClick={() => window.location.replace("/#About")}>
                    About
                </Navlink>

                <Navlink onClick={() => window.location.replace("/#Footer")}>
                    Contact
                </Navlink>
            </Div1>
        </Nav>
    );
};

export default Header;
