import { useState } from "react";
import styled from "styled-components";

const AnglesOfTrianglePage = () => {
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
    <Container>
      <ContentArea>
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
                <input
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
                <input
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
                <input
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
              <h3 style={{ color: "#ff0000" }}>
                This cannot make a Δ. Try again!{" "}
              </h3>
            )}
          </Output>
        </ActionArea>
      </ContentArea>
    </Container>
  );
};

export default AnglesOfTrianglePage;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div``;

const ContentArea = styled.div`
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
    padding-bottom: 2rem;
    span {
      color: #23d997;
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
