import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import imgOne from "../Assets/imgOne.jpg";
import QuestionList from "../Components/QuesitonList";
import { BsArrowLeft } from "react-icons/bs";
import data from "../data";

const QuizPage = () => {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [quesitonSet, setQuestionSet] = useState(data);

  return (
    <Outercontainer>
      <div className="heading">
        <h3>
          Take a quiz about <span>Δ</span>.
        </h3>
        <button className="gobackBtn" onClick={() => history.goBack()}>
          <BsArrowLeft /> Back
        </button>
      </div>
      <Container>
        <QuestionContainer>
          <form>
            {quesitonSet.map(item => (
              <QuestionList item={item} key={item.id} />
            ))}
            <button className="sbmt" type="submit">
              {" "}
              Find Result{" "}
            </button>
          </form>
        </QuestionContainer>
        <ScoreContainer>{/* <h1>10</h1> */}</ScoreContainer>
      </Container>
    </Outercontainer>
  );
};

export default QuizPage;

/* ---------------------------- Styled Components --------------------------- */

const Outercontainer = styled.div`
  position: relative;
  h3 {
    font-size: 3rem;
    color: #fff;
    display: block;

    span {
      color: #23d997;
    }
  }

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-bottom: 1rem; */
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

  .sbmt {
    margin: 1rem 0;
    width: 30%;
    position: relative;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Container = styled.div`
  border: 1px solid red;
  height: calc(100vh - 10rem);
  display: flex;
`;

const QuestionContainer = styled.div`
  flex: 2;
  border: 1px solid red;
  overflow: scroll;
`;

const ScoreContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  color: rgb(58, 210, 159);
  background: url(${imgOne}) no-repeat center center / cover;
`;
