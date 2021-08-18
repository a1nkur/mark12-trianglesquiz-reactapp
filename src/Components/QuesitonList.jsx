import { Fragment } from "react";
import styled from "styled-components";

import { motion } from "framer-motion";
import { fade } from "../animate";

const Option = ({
  option,
  name,
  setAnswerArr,
  setScore,
  item,
  setShowScore,
}) => {
  const handleOnChange = e => {
    setShowScore(false);
    if (e.target.value === item.answer) {
      setScore(prevState => prevState + 1);
    }
  };

  return (
    <Fragment>
      <label htmlFor={option}>
        <input
          type="radio"
          name={name}
          id={option}
          value={option}
          onChange={handleOnChange}
        />
        {option}
      </label>
    </Fragment>
  );
};

const QuestionList = ({ item, setScore, setShowScore }) => {
  return (
    <Container variants={fade} initial="hidden" animate="show" key={item.id}>
      <h6>{item.question}</h6>
      {item.options.map((option, index) => (
        <Option
          option={option}
          key={index}
          item={item}
          name={item.id}
          setShowScore={setShowScore}
          setScore={setScore}
        />
      ))}
    </Container>
  );
};

export default QuestionList;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled(motion.div)`
  color: #fff;
  padding: 2rem;

  h6 {
    font-size: 1.5rem;
    padding-bottom: 10px;
    color: #23d997;
  }

  label {
    padding: 0 0.9rem 0 0;
  }
`;
