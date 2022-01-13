import "./App.css";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Home from "./pages/Home";
import Game from "./pages/Game";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hangman from "./components/Hangman/Hangman";
import 'bootstrap/dist/css/bootstrap.min.css';
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/games" exact component={Game} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/hangman" exact component={Hangman} />
          <Route path="/ticTacToe" exact component={TicTacToe} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
