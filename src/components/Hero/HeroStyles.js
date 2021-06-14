import styled from "styled-components";

export const Container = styled.div`
    margin-top: 14rem;

    & p {
        font-size: 2rem;
        margin-top: 1.5rem;
    }
`;

export const Title = styled.h1`
    font-size: 5rem;
    font-weight: 600;
`;

export const Button = styled.button`
    height: 5rem;
    padding: 1.2rem 3rem;
    color: #ebebeb;
    background-color: #0f4c75;
    border: 1px solid #0f4c75;
    margin-top: 5rem;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 1.5rem;
    border-radius: 2.5px;
    box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);

    &:hover {
        transform: translateY(-3px);
    }
`;
