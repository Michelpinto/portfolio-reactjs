import styled from "styled-components";

export const Container = styled.div`
    margin-top: 16rem;
    display: flex;
    flex-direction: column;

    &::before {
        content: "";
        height: 0.2px;
        opacity: 10%;
        width: 100%;
        display: block;
        background-color: #fff;
        margin-right: 2rem;
    }

    & img {
        margin-top: 10rem;
        align-self: center;
    }
`;

export const SocialIcons = styled.div`
    font-size: 2rem;
    display: flex;
`;

export const Icon = styled.a`
    transition: all 0.2s;
    cursor: pointer;
    margin-right: 2rem;

    &:last-child {
        margin-right: 0;
    }

    &:hover {
        color: #569cca;
    }
`;

export const Content = styled.div`
    margin: 5rem 0;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 400px) {
        text-align: center;
    }
`;

export const Title = styled.p`
    opacity: 50%;
    margin-bottom: 2rem;
`;

export const Email = styled.a`
    transition: all 0.2s;
    cursor: pointer;
    opacity: 85%;

    &:hover {
        color: #fff;
        transform: translate(3px);
        opacity: 100%;
    }
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Text = styled.p`
    font-size: 1.5rem;

    @media screen and (max-width: 400px) {
        margin-bottom: 3rem;
    }
`;
