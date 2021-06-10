import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Components/Post";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Post /> */}
      <Router>
        <Route path="/" component={Post} exact />
      </Router>
    </div>
  );
}

export default App;
