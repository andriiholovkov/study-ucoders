import './App.css';
import Header from './components/header';
import SignIn from './components/signIn';
import SignUp from "./components/sign-up";

function App() {
  return (
    <div className="App">
      <Header />
      <SignIn />
      <SignUp />
    </div>
  );
}

export default App;
