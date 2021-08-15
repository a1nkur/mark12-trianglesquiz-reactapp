import { useState } from "react";
import styled from "styled-components";
import imgOne from "../Assets/imgOne.jpg";
import QuestionList from "../Components/QuesitonList";

const QuizPage = () => {
  const [quesitonSet, setQuestionSet] = useState([
    {
      question:
        "If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?",
      answer: "yes",
    },
    {
      question:
        "If a triangle has angles 1150, 250, 400. Is it an acute triangle?",
      answer: "no",
    },
    {
      question:
        "If a triangle has angles 900, 600, 300. Is it a right angle triangle?",
      answer: "yes",
    },
    {
      question:
        "A triangle has angles 600, 600, 600. Is it an equilateral triangle?",
      answer: "yes",
    },
    {
      question:
        "If a triangle has angles 250, 750, 800. Is it an acute triangle?",
      answer: "yes",
    },
    {
      question:
        "If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?",
      answer: "",
    },
    {
      question:
        "If a triangle has 2 angles of 750. What is the measure of third angle in degree?",
      answer: "",
    },
    {
      question:
        "If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?",
      answer: "",
    },
    {
      question:
        "The perimeter of an equilateral triangle is 15cm. What is the length of one side?",
      answer: "",
    },
    {
      question:
        "If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?",
      answer: "",
    },
  ]);

  return (
    <Container>
      <QuestionContainer>
        <h3>Take the quiz about triangles.</h3>
        <QuestionList />
      </QuestionContainer>
      <ScoreContainer>
        <h1>10</h1>
      </ScoreContainer>
    </Container>
  );
};

export default QuizPage;

/* ---------------------------- Styled Components --------------------------- */

const Container = styled.div`
  min-height: 100vh;
  background: url(${imgOne}) no-repeat center center / cover;
  padding: 5rem 5rem;
  display: flex;
`;

const QuestionContainer = styled.div`
  flex: 0.7;

  h3 {
    font-size: 3rem;
    color: #fff;
  }
`;
const ScoreContainer = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  color: rgb(58, 210, 159);
`;
