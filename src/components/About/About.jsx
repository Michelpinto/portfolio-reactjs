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
                        I am a self-taught Frontend web developer who enjoys
                        finding solutions to difficult problems. I’ve always had
                        a creator personality and found ways to achieve things
                        on my own. I’m a visual and fast learner and would
                        thrive in highly collaborative environments.
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
