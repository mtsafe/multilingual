import React from "react";
import { MultipleSelect } from "./components/multiple-select/multiple-select.component";
import logo from "./logo.svg";
import "./App.css";
import { default as java } from "./assets/json/java.json";

function foo() {
  let str = JSON.stringify(java);
  const regexs = [
    {
      key: /\[/gi,
      value: `[
`,
    },
    {
      key: /\\n/gi,
      value: `\n`,
    },
    {
      key: /\\t/gi,
      value: `   `,
    },
    {
      key: /},/gi,
      value: `},
`,
    },
    {
      key: /],/gi,
      value: `],
`,
    },
  ];

  regexs.forEach(({ key, value }) => {
    str = str.replace(key, value);
  });
  return str;
}

const languageList = ["ANSI C", "Java", "Javascript", "Python"];

const featureList = [
  "comments",
  "loops",
  "loop control statements",
  "operators",
  "concatenation",
  "math",
  "variables",
];

const subfeatureList = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "C",
    };
    this.handleChange = (changeEvent) => {
      this.setState({
        selectedOption: changeEvent.target.value,
      });
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1>Multilingual</h1>
          <div className="nav-select-group">
            <MultipleSelect label="Languages" list={languageList} />
            <MultipleSelect label="Features" list={featureList} />
            <MultipleSelect label="Sub-Features" list={subfeatureList} />
          </div>
          <pre>{`${foo()}`}</pre>
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
