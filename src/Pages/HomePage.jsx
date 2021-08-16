import styled from "styled-components";

import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomePage = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>
          Fun with <span> Δ</span>s.
        </h1>
        <div className="line"></div>
      </TitleContainer>
      <OptionsContainer>
        <Link to="/quiz">
          <div className="option">
            <p>Take Quiz</p> <AiOutlineArrowRight />
          </div>
        </Link>
        <Link to="/check-hypotenuse">
          <div className="option">
            <p>Hypotenuse Calculator</p> <AiOutlineArrowRight />
          </div>
        </Link>
        <Link to="/area-of-triangle">
          <div className="option">
            <p>Calculate Area of Triangle</p> <AiOutlineArrowRight />
          </div>
        </Link>
        <Link to="/angles-of-triangle">
          <div className="option">
            <p>Angles of Triangle</p> <AiOutlineArrowRight />
          </div>
        </Link>
      </OptionsContainer>
    </Container>
  );
};

export default HomePage;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  max-width: 96%;
  background-color: #131515;
  color: #fff;
`;

const TitleContainer = styled.div`
  padding-bottom: 2rem;

  h1 {
    font-size: 4.5rem;
    padding-bottom: 1rem;
    span {
      font-size: 8rem;
    }
  }

  span {
    color: #23d997;
  }

  .line {
    height: 1px;
    width: 60%;
    background-color: #fff;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  width: 40rem;

  a {
    padding: 1rem;
    flex-basis: 15rem;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: #23d997;
      color: #000;
      border: none;
    }
  }

  .option {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
