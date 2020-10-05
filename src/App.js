import React from "react";
import { FormControl, FormControlLabel, FormLabel } from "@material-ui/core";
import { Radio, RadioGroup } from "@material-ui/core";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "C",
    };
  }

  handleChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Multilingual</h1>
          <FormControl component="fieldset">
            <FormLabel component="legend">Language</FormLabel>
            <RadioGroup
              aria-label="language"
              name="language"
              value={this.state.selectedOption}
              onChange={this.handleChange}
            >
              <FormControlLabel value="C" control={<Radio />} label="C" />
              <FormControlLabel value="Java" control={<Radio />} label="Java" />
              <FormControlLabel
                value="Javascript"
                control={<Radio />}
                label="Javascript"
              />
              <FormControlLabel
                value="Python"
                disabled
                control={<Radio />}
                label="Python (Disabled option)"
              />
            </RadioGroup>
          </FormControl>
        </nav>
        <header className="App-header">
          <div id="lang-chooser"></div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
