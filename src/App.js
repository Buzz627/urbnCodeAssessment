import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {date: new Date(), clicked:"false"};
    this.addOne=this.addOne.bind(this)
  }

  render(){

    // return(
    //   <div>
    //     <h1>Hello, world!</h1>
    //     <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
    //   </div>
    // )



    return (
      <div>
        <button onClick={this.addOne} >
          click me
        </button>
        <br/>
        clicked: {this.state.clicked}
      </div>
      )




    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //       
    //     </header>

    //   </div>

    // );
  }
  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  // }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  addOne(){
    console.log("here")
    this.setState({
      clicked: "true"
    })
  }
}
  

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  return element
}



export default App;
