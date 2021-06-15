import {
    Container,
    Div,
    Div1,
    Content,
    Div2,
    Icon,
    BigIcons,
    BigIcon,
} from "../About/AboutStyles";
import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoSass,
    IoLogoJavascript,
    IoLogoReact,
    IoLogoVercel,
    IoLogoFigma,
    IoPersonCircleOutline,
    IoCodeSlashOutline,
} from "react-icons/io5";

const About = () => {
    return (
        <Container id="About">
            <Div>About</Div>
            <Div1>
                <Content>
                    <Div2>
                        <h2>About me</h2>
                        <Icon>
                            <IoPersonCircleOutline />
                        </Icon>
                    </Div2>
                    <p>
                        I'm Michel Pinto, 23 years old from Angola. I started
                        learning web development and design september 2020, but
                        only got serious about it in december and i never looked
                        back. I'm a go-getter type of person and i like to get
                        things done.
                    </p>
                </Content>

                <Content>
                    <Div2>
                        <h2>Stacks and skills</h2>
                        <Icon>
                            <IoCodeSlashOutline />
                        </Icon>
                    </Div2>
                    <BigIcons>
                        <BigIcon>
                            <IoLogoHtml5 />
                        </BigIcon>
                        <BigIcon>
                            <IoLogoCss3 />
                        </BigIcon>
                        <BigIcon>
                            <IoLogoSass />
                        </BigIcon>
                        <BigIcon>
                            <IoLogoJavascript />
                        </BigIcon>
                        <BigIcon>
                            <IoLogoReact />
                        </BigIcon>
                        <BigIcon>
                            <IoLogoVercel />
                        </BigIcon>
                        <BigIcon>
                            <IoLogoFigma />
                        </BigIcon>
                    </BigIcons>
                </Content>
            </Div1>
        </Container>
    );
};

export default About;
