import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="calHead">JavaScript Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "0",
      btnActive: "#6de5ff",
      preVal: "",
    };

    this.getInput = this.getInput.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  clearDisplay() {
    this.setState({
      display: "0",
    });
  }

  getInput(event) {
    let opRegex = /\+|\*|\//g;
    let regex = /^0|^\./g;
    let regexPlus = /\+\++/g;
    let regexMul = /\*\*+/g;
    let regexMinus = /--+/g;
    let regexDiv = /\/\/+/g;
    let display = this.state.display;
    let splitted = display.split(/[\+\-\*\/]/);
    let lastDigit = splitted[splitted.length - 1];

    this.setState({
      preVal: event.target.value,
    });

    if (event.target.value === ".") {
      if (!lastDigit.includes(".")) {
        this.setState({
          display: this.state.display + ".",
        });
      }
    } else if (opRegex.test(event.target.value)) {
      console.log("Inside else if");
      this.setState(() => {
        if (
          this.state.preVal === "+" ||
          this.state.preVal === "/" ||
          this.state.preVal === "*" ||
          this.state.preVal === "-"
        ) {
          return {
            display: this.state.display
              .replace("+", event.target.value)
              .replace("/", event.target.value)
              .replace("*", event.target.value)
              .replace("-", event.target.value),
          };
        } else {
          return { display: this.state.display + event.target.value };
        }
      });
    } else {
      this.setState({
        display:
          this.state.display
            .replace(regex, "")
            .replace(regexPlus, "+")
            .replace(regexMinus, "-")
            .replace(regexMul, "*")
            .replace(regexDiv, "/") + event.target.value,
      });
    }
  }

  evaluate(event) {
    this.setState({
      display: eval(this.state.display) + event.target.value.replace("=", ""),
    });
  }

  render() {
    return (
      <div className="calDiv">
        <div className="calDisplay" id="display">
          {this.state.display}
        </div>
        <div className="clearDiv">
          <button onClick={this.clearDisplay} id="clear">
            AC
          </button>
        </div>
        <div className="calBtnGrid">
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="seven"
            value="7"
          >
            7
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="eight"
            value="8"
          >
            8
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="nine"
            value="9"
          >
            9
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="divide"
            value="/"
          >
            /
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="four"
            value="4"
          >
            4
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="five"
            value="5"
          >
            5
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="six"
            value="6"
          >
            6
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="multiply"
            value="*"
          >
            x
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="one"
            value="1"
          >
            1
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="two"
            value="2"
          >
            2
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="three"
            value="3"
          >
            3
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="subtract"
            value="-"
          >
            -
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="zero"
            value="0"
          >
            0
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="decimal"
            value="."
          >
            .
          </button>
          <button
            onClick={this.evaluate}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="equals"
            value="="
          >
            =
          </button>
          <button
            onClick={this.getInput}
            className="calBtn"
            style={{ backgroundColor: this.state.btnActive }}
            id="add"
            value="+"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
