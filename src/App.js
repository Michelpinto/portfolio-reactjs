import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import Animation from "./components/BackgroundAnimation/Animation";
import smoothscroll from "smoothscroll-polyfill";

const Section = styled.section`
    display: ${(props) => (props.grid ? "grid" : "flex")};
    flex-direction: ${(props) => (props.row ? "row" : "column")};
    padding: ${(props) => (props.nopadding ? "0" : "32px 6.5rem 0")};
    margin: 0;
    /* max-width: 1040px; */
    box-sizing: content-box;
    position: relative;
    overflow: hidden;
    grid-template-columns: 1fr 1fr;

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0 24px 0;
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }

    @media screen and (max-width: 350px) {
        padding: 0;
    }
`;

smoothscroll.polyfill();

function App() {
    return (
        <div>
            <Header />
            <Section grid>
                <Hero />
                <Animation />
            </Section>
            <Projects />
            <About />
            <Footer />
        </div>
    );
}

export default App;
