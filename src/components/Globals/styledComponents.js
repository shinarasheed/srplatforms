import styled from "styled-components"

export const StyledCsr = styled.section`
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  & .text,
  & .banner {
    flex: 1;
  }

  & .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
  }

  & h5 {
    font-size: 2.5rem;
    text-align: left;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
  }

  & p:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`
