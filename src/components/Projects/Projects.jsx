import {
    Container,
    Div,
    Div1,
    Content,
    BlogCard,
    Img,
    Button,
    Div2,
    ButtonGit,
    Icon,
} from "../Projects/ProjectsStyles";
import { IoLogoGithub } from "react-icons/io5";

import Img1 from "../../assets/work1.png";
import Img2 from "../../assets/work2.png";

const Projects = () => {
    return (
        <Container id="Projects">
            <Div>Portfolio</Div>
            <Div1>
                <BlogCard>
                    <Img src={Img1} />
                    <Content>
                        <h3>E-commerce Xclusive app</h3>
                        <p>
                            I've always wanted to build an E-commerce website
                            given the boom on E-commerce. Very nice project, i
                            followed a tutorial and learned how to add stripe
                            payments, how to use commercejs and i added a few
                            changes.
                        </p>
                        <p>
                            Javascript, React, Commercejs, Stripe, Material UI
                        </p>
                        <Div2>
                            <Button>
                                <a
                                    href="https://xclusiveshop.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    See demo <span>&rarr;</span>
                                </a>
                            </Button>
                            <Button>
                                <a
                                    href="https://github.com/Michelpinto/e-commerce-app"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                </a>
                            </Button>
                        </Div2>
                    </Content>
                </BlogCard>

                <BlogCard>
                    <Img src={Img2} />
                    <Content>
                        <h3>Banking dashboard app</h3>
                        <p>
                            This was by far the most challenging project i ever
                            did but also the most rewarding. I made the design
                            and built it from scratch and i learned a lot from
                            it. I like fintech and neobanks so i decided to give
                            it a try, and it contains a static landing page too.
                        </p>
                        <p>Javascript, React, styled components, Material UI</p>
                        <Div2>
                            <Button>
                                <a
                                    href="https://finpayapp.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    See demo <span>&rarr;</span>
                                </a>
                            </Button>
                            <Button>
                                <a
                                    href="https://github.com/Michelpinto/dashboard-app"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                </a>
                            </Button>
                        </Div2>
                    </Content>
                </BlogCard>
            </Div1>
            <a
                href="https://github.com/Michelpinto?tab=repositories"
                target="_blank"
                rel="noreferrer"
            >
                {" "}
                <ButtonGit>
                    See more projects
                    <Icon>
                        <IoLogoGithub />
                    </Icon>
                </ButtonGit>
            </a>
        </Container>
    );
};

export default Projects;

// https://finpayapp.netlify.app/
