import styled from "styled-components";

import HomePage from "./Pages/HomePage";

import { Route, Switch } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import CheckHypoPage from "./Pages/CheckHypoPage";
import AnglesOfTrianglePage from "./Pages/AnglesOfTrianglePage";
import TriangleAreaPage from "./Pages/TriangleAreaPage";

function App() {
  return (
    <AppContainer>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/quiz">
          <QuizPage />
        </Route>
        <Route path="/check-hypotenuse">
          <CheckHypoPage />
        </Route>
        <Route path="/angles-of-triangle">
          <AnglesOfTrianglePage />
        </Route>
        <Route path="/area-of-triangle">
          <TriangleAreaPage />
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #131515;
  padding: 5rem 10rem;
`;
