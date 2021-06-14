import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Div1 = styled.div`
    display: flex;
    gap: 5rem;

    font-size: 1.5rem;
    font-weight: 600;

    @media ${(props) => props.theme.breakpoints.md} {
        gap: 3rem;
    }
`;

export const Navlink = styled.p`
    transition: all 0.2s;
    &:hover {
        color: #569cca;
    }
`;
