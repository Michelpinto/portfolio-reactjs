import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Div1 = styled.div`
  display: flex;
  /* gap: 5rem; */

  font-size: 1.5rem;
  font-weight: 600;
`;

export const Navlink = styled.a`
  transition: all 0.2s;
  margin-right: 5rem;
  cursor: pointer;
  color: #569cca;

  &:last-child {
    margin-right: 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin-right: 3rem;
  }

  &:hover {
    color: #569cca;
  }
`;
