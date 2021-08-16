import { Fragment } from "react";
import styled from "styled-components";

const Option = ({ option, name }) => {
  return (
    <Fragment>
      <label htmlFor={option}>
        <input type="radio" name={name} id={option} value={option} />
        {option}
      </label>
    </Fragment>
  );
};

const QuestionList = ({ item }) => {
  return (
    <Container key={item.id}>
      <h6>{item.question}</h6>
      {item.options.map((option, index) => (
        <Option option={option} key={index} name={item.id} />
      ))}
    </Container>
  );
};

export default QuestionList;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
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
