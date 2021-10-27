import './App.css';
import {Route, Switch} from "react-router-dom";
import SignInPage from "./pages/sign-in";
import SignUpPage from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import {SIGN_IN, SIGN_UP, RESET_PASSWORD} from "./assets/path";
import Header from "./components/header";
import {useState} from "react";

function App() {
  const [isSingInPage, setIsSingInPage] = useState(true);

  return (
      <>
        <Header className={'mainHeader__btn'} isSingInPage={isSingInPage} setIsSingInPage={setIsSingInPage}/>
          <Switch>
              <Route exact path={SIGN_IN} component={SignInPage}/>
              <Route path={SIGN_UP} component={SignUpPage}/>
              <Route path={RESET_PASSWORD} component={ForgotPassword}/>
          </Switch>
      </>
  );
}

export default App;
