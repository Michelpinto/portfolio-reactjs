import { Title, Container, Button } from "./HeroStyles";

const Hero = () => {
    return (
        <Container>
            <Title>Hi, I'm Michel</Title>
            <p>
                I’m a self-taught Frontend <br />
                developer and UI Designer.
            </p>

            <a href="mailto:michelpintodev@gmail.com">
                <Button>Let’s build 🚀</Button>
            </a>
        </Container>
    );
};

export default Hero;
