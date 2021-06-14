import styled from "styled-components";

export const Container = styled.div`
    margin-top: 16rem;
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
        background-color: #fff;
        margin-right: 2rem;
    }
`;

export const Div1 = styled.div`
    margin-top: 10rem;
    display: flex;
    justify-content: space-between;

    @media ${(props) => props.theme.breakpoints.xl} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    line-height: 0.7cm;
    padding: 0 6.5rem;
    width: 45%;

    @media ${(props) => props.theme.breakpoints.xl} {
        padding: 0 4.5rem;
        width: 100%;
    }

    @media ${(props) => props.theme.breakpoints.md} {
        padding: 0 2.5rem;
    }

    & h2 {
        font-size: 2rem;
    }

    & p {
        font-size: 1.5rem;
    }
`;

export const Div2 = styled.div`
    display: flex;
    /* align-items: center; */
    gap: 1rem;
`;

export const Icon = styled.div`
    font-size: 2.5rem;
`;

export const BigIcons = styled.div`
    font-size: 4.5rem;
    display: flex;
    gap: 1rem;
`;

export const BigIcon = styled.div`
    transition: all 0.2s;
    opacity: 85%;

    &:hover {
        color: #fff;
        opacity: 100%;
    }
`;
