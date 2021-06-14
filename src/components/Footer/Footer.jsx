import {
    Container,
    SocialIcons,
    Icon,
    Content,
    Title,
    Email,
    Div,
    Text,
} from "./FooterStyles";
import Logo from "../../assets/logo.svg";
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin,
    IoLogoDribbble,
} from "react-icons/io5";

const Footer = () => {
    return (
        <Container id="Footer">
            <img
                onClick={() => window.location.replace("/#")}
                src={Logo}
                alt="logo"
                style={{ width: "6rem", height: "6rem", cursor: "pointer" }}
            />

            <Content>
                <Title>Email:</Title>
                <Email href="mailto:michelpintodev@gmail.com">
                    michelpintodev@gmail.com
                </Email>
            </Content>
            <Div>
                <Text>Building 👨🏾‍💻 2021 © Michel Pinto</Text>
                <SocialIcons>
                    <Icon
                        href="https://www.instagram.com/_michelpinto/"
                        target="_blank"
                    >
                        <IoLogoInstagram />
                    </Icon>
                    <Icon href="https://github.com/Michelpinto" target="_blank">
                        <IoLogoGithub />
                    </Icon>
                    <Icon
                        href="https://www.linkedin.com/in/michel-pinto-78708b1b4/"
                        target="_blank"
                    >
                        <IoLogoLinkedin />
                    </Icon>
                    <Icon
                        href="https://dribbble.com/_MichelPinto"
                        target="_blank"
                    >
                        <IoLogoDribbble />
                    </Icon>
                </SocialIcons>
            </Div>
        </Container>
    );
};

export default Footer;
