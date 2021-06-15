import styled from "styled-components";

export const Container = styled.div`
    margin-top: 15rem;
    display: flex;
    flex-direction: column;

    & a {
        align-self: center;
    }
`;

export const Div = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        height: 1.5px;
        width: 7rem;
        display: block;
        background-color: #ebebeb;
        margin-right: 2rem;
    }
`;

export const Text = styled.p`
    font-size: 1.5rem;
    margin-top: 3rem;
`;

export const Div1 = styled.div`
    margin-top: 10rem;
    padding: 0 6.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.xl} {
        display: flex;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        padding: 0 3.5rem;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0 2.5rem;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }

    @media screen and (max-width: 350px) {
        padding: 0;
    }
`;

export const BlogCard = styled.div`
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    width: 450px;

    @media ${(props) => props.theme.breakpoints.xl} {
        margin-bottom: 5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media ${(props) => props.theme.breakpoints.lg} {
        width: 60%;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        width: 80%;
    }

    @media ${(props) => props.theme.breakpoints.xs} {
        width: 100%;
    } ;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
`;

export const Content = styled.div`
    max-width: 60rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;

    & h3 {
        font-size: 2rem;
        color: #569cca;
        margin-bottom: 2.5rem;

        @media screen and (max-width: 400px) {
            margin-bottom: 2rem;
        }
    }

    & p {
        font-size: 1.5rem;
        line-height: 0.7cm;
        margin-bottom: 2.5rem;

        @media screen and (max-width: 400px) {
            margin-bottom: 2rem;
        }
    }

    @media screen and (max-width: 350px) {
        padding: 1rem;
    }
`;

export const Button = styled.button`
    background-color: #0f4c75;
    padding: 1rem;
    border: none;
    border-radius: 2.5px;
    align-self: flex-start;
    font-size: 1.5rem;

    color: #ebebeb;
    cursor: pointer;
    transition: all 0.2s;
    opacity: 85%;

    & span {
        margin-left: 3px;
        transition: all 0.2s;
    }

    &:hover {
        /* color: #569cca; */
        opacity: 100%;

        span {
            margin-left: 8px;
        }
    }
`;

export const Div2 = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ButtonGit = styled.button`
    height: 5rem;
    padding: 1.2rem 3rem;
    color: #ebebeb;
    background-color: #0f4c75;
    border: 1px solid #0f4c75;
    margin-top: 10rem;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1.5rem;
    border-radius: 2.5px;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    width: fit-content;
    align-items: center;

    /* gap: 1rem; */

    &:hover {
        transform: translateY(-3px);
    }
`;

export const Icon = styled.div`
    font-size: 2rem;
    margin-left: 1rem;
`;
