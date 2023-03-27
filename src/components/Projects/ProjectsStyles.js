import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;

  & a {
    align-self: center;
  }

  & h2 {
    font-size: 2.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 4rem;
  grid-row-gap: 2rem;
  margin-top: 5rem;

  @media screen and (max-width: 855px) {
    grid-column-gap: 20px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const SingleContainer = styled.a`
  padding: 2.5rem 1.5rem;
  border-radius: 1rem;
  border: 1px solid #8f8f8f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  & h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #569cca;
  }

  & p {
    font-size: 1.3rem;
    line-height: 1.5;
  }

  & p:last-child {
    justify-self: flex-end;
  }
`;
