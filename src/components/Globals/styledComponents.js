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
    padding: 0 7rem;

    @media (max-width: 768px) {
      padding: 4rem 6rem;
    }
  }

  img {
    width: 100%;
  }

  & h5 {
    font-size: 2.5rem;
    text-align: left;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  & p {
    font-size: 1.6rem;
    line-height: 1.6;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
  }

  & p:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`
