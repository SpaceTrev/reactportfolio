import React, { Component } from "react";
// import logo from './logo.svg';
import NavBar from './components/navbar/index';
import Footer from './components/footer/index';
import "./App.css";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { show: true };
  // }
  render() {
    // const handleHide = () => this.setState({ show: false });
    // const handleShow = () => this.setState({ show: true });
    return (
      <div className="App">
      <NavBar />
      <Footer />
      </div>
    );
  }
}

export default App;
