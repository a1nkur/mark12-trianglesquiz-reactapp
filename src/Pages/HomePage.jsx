import styled from "styled-components";

import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

import { motion } from "framer-motion";
import { fade, titleAnimate, genericAnimate, lineAnimation2 } from "../animate";

const HomePage = () => {
  return (
    <Container variants={genericAnimate} initial="hidden" animate="show">
      <TitleContainer>
        <motion.h1 variants={titleAnimate}>
          Fun with <span> Δ</span>s.
        </motion.h1>
        <motion.div className="line" variants={lineAnimation2}></motion.div>
      </TitleContainer>
      <OptionsContainer>
        <Link to="/quiz">
          <motion.div className="option" variants={fade}>
            <p>Take Quiz</p> <AiOutlineArrowRight />
          </motion.div>
        </Link>
        <Link to="/check-hypotenuse">
          <motion.div className="option" variants={fade}>
            <p>Hypotenuse Calculator</p> <AiOutlineArrowRight />
          </motion.div>
        </Link>
        <Link to="/area-of-triangle">
          <motion.div className="option" variants={fade}>
            <p>Calculate Area of Triangle</p> <AiOutlineArrowRight />
          </motion.div>
        </Link>
        <Link to="/angles-of-triangle">
          <motion.div className="option" variants={fade}>
            <p>Angles of Triangle</p> <AiOutlineArrowRight />
          </motion.div>
        </Link>
      </OptionsContainer>
    </Container>
  );
};

export default HomePage;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled(motion.div)`
  max-width: 96%;
  background-color: #131515;
  color: #fff;
`;

const TitleContainer = styled.div`
  overflow: hidden;
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
    width: 100%;
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
