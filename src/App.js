import React from "react";
import "./App.scss";
import { Login, Register } from "./components/login/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginActive: true,
    };
  }

  changeState() {
    const { isLoginActive } = this.state;

    if(isLoginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }

    this.setState((prevState) => ({ isLoginActive: !prevState.isLoginActive}))
  }

  render() {
    const { isLoginActive } = this.state;
    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "login" : "register";
    
    return (
      <div className="App">
        <div className="login">
          <div className="container">
            {isLoginActive && (
              <Login containerRef={(ref) => (this.current = ref)} />
            )}
            {!isLoginActive && (
              <Register containerRef={(ref) => (this.current = ref)} />
            )}
          </div>
          <RightSide current={current} containerRef={ref => this.rightSide = ref} onClick={this.changeState.bind(this)} />
        </div>
      </div>
    );
  }
}

const RightSide = (props) => {
  return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
    <div className="text">{props.current}</div>
  </div>;
};

export default App;
