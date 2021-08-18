import { useState } from "react";
import styled from "styled-components";

import { BsArrowLeft } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import { motion } from "framer-motion";
import { fade, genericAnimate, lineAnimation2 } from "../animate";

const AnglesOfTrianglePage = () => {
  const history = useHistory();

  //* State
  const [enteredFormData, setEnteredFormData] = useState({
    a: "",
    b: "",
    c: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  //* Event Handlers
  const handleOnChange = e => {
    setEnteredFormData(prevState => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { a, b, c } = enteredFormData;

    if (Number(a) + Number(b) + Number(c) === 180) {
      setResult(true);
      setError(false);
    } else {
      setError(true);
      setResult(false);
    }
  };

  return (
    <Container variants={genericAnimate} initial="hidden" animate="show">
      <ContentArea variants={fade}>
        <button className="gobackBtn" onClick={() => history.goBack()}>
          <BsArrowLeft /> Back
        </button>
        <div className="title">
          <h1>
            Enter the <span>angles</span> in below input boxes and we
          </h1>
          <h1>
            will tell you if those <span>angles</span> make a <span>Δ</span> .
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
                  placeholder="A°"
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
                  placeholder="B°"
                  onChange={handleOnChange}
                  value={enteredFormData.b}
                  required
                />
              </div>
              <div className="form__control">
                <motion.input
                  variants={lineAnimation2}
                  type="number"
                  name="c"
                  id="c"
                  min={0}
                  step={0.1}
                  placeholder="C°"
                  onChange={handleOnChange}
                  value={enteredFormData.c}
                  required
                />
              </div>
              <button type="submit"> check</button>
            </form>
          </FormContainer>
          <Output>
            {result && <h3 style={{ color: "#23d997" }}>It's a triangle.</h3>}
            {error && (
              <motion.h3 variants={fade} style={{ color: "#ff0000" }}>
                This cannot make a Δ. Try again!{" "}
              </motion.h3>
            )}
          </Output>
        </ActionArea>
      </ContentArea>
    </Container>
  );
};

export default AnglesOfTrianglePage;

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
    top: 0;
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
      width: 40%;
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

const Output = styled.div`
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
