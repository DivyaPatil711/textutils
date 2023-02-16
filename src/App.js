import "./App.css";

import TextForm from "./Components/TextForm";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
       
      <Router>
         <div className="container my-3">
          <Switch>
            <Route path="/TextForm">
              <TextForm
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert} /> 
            </Route>
            <Route path="/About">
              <About />
            </Route>
            {/* <Route exact path="/" component={TextForm} /> */}
            {/* <Route exact path="/about" component={About} /> */}
          </Switch>
        </div>
      </Router>
     {/* <Router> */}
    {/* <Switch> */}
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/about" component={About} /> */}
    {/* </Switch> */}
  {/* </Router>   */}
  
    </>
  );
}

export default App;
