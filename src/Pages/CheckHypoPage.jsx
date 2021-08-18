import { useState } from "react";
import styled from "styled-components";

import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";
import { fade, genericAnimate, lineAnimation2 } from "../animate";

const CheckHypoPage = () => {
  const history = useHistory();

  //* State
  const [enteredFormData, setEnteredFormData] = useState({
    a: "",
    b: "",
    c: "",
  });

  const [result, setResult] = useState(null);

  //* Event Handlers
  const handleOnChange = e => {
    setEnteredFormData(prevState => {
      return {
        ...prevState,
        [e.target.id]: Number(e.target.value),
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { a, b } = enteredFormData;
    const result = Math.sqrt(a ** 2 + b ** 2).toFixed(2);

    setResult(result);
  };

  return (
    <Container variants={genericAnimate} initial="hidden" animate="show">
      <ContentArea variants={fade}>
        <button className="gobackBtn" onClick={() => history.goBack()}>
          <BsArrowLeft /> Back
        </button>
        <div className="title">
          <h1>
            Calculate the <span>Hypotenuse</span> of the <span>Δ</span>
          </h1>
          <h1>
            using the formula <span>√(base² + height²)</span> .
          </h1>
        </div>
        <ActionArea>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <div className="form__control">
                <motion.input
                  variants={lineAnimation2}
                  type="number"
                  name="a"
                  id="a"
                  min={0}
                  step={0.1}
                  placeholder="Enter base value A"
                  onChange={handleOnChange}
                  value={enteredFormData.a}
                  required
                />
              </div>
              <div className="form__control">
                <motion.input
                  variants={lineAnimation2}
                  type="number"
                  name="b"
                  id="b"
                  min={0}
                  step={0.1}
                  placeholder="Enter base value B"
                  onChange={handleOnChange}
                  value={enteredFormData.b}
                  required
                />
              </div>

              <button type="submit"> calculate </button>
            </form>
          </FormContainer>
          <Output variants={fade}>
            {result && (
              <motion.h3 variants={fade} style={{ color: "#23d997" }}>
                H = {result} unit <sup>2</sup>
              </motion.h3>
            )}
          </Output>
        </ActionArea>
      </ContentArea>
    </Container>
  );
};

export default CheckHypoPage;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled(motion.div)``;

const ContentArea = styled(motion.div)`
  position: relative;

  h1,
  h2 {
    color: #fff;
  }
  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.5rem;
  }

  .title {
    padding: 2rem 0rem;
    span {
      color: #23d997;
    }
  }

  .gobackBtn {
    position: absolute;
    top: 8%;
    right: 0;
  }
  button {
    padding: 0.5rem 0.7rem;
    width: 10%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: transparent;
    border: 1px solid #23d997;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background-color: #23d997;
      color: #fff;
    }
  }
`;

const ActionArea = styled.div`
  display: flex;
`;

const FormContainer = styled.div`
  flex: 1;
  .form__control {
    input {
      padding: 1rem;
      width: 60%;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid #23d997;
      color: #fff;
      font-size: 1.2rem;

      &:focus {
        outline: none;
      }
    }

    padding-bottom: 3rem;
  }

  button {
    padding: 0.5rem 0.7rem;
    width: 20%;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #23d997;
    color: #fff;
    transition: all 0.3s ease;

    &:hover {
      background-color: #23d997;
      color: #fff;
    }
  }
`;

const Output = styled(motion.div)`
  display: flex;
  align-items: center;
  color: #23d997;
  font-size: 3rem;

  flex: 1;

  h3 {
    border: 1px solid #fff;
    outline: 1px solid #23d997;
    outline-offset: 5px;
    padding: 1rem;
  }
`;
