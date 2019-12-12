import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AnswerButton from './AnswerButton'

class Game extends React.Component{

  constructor(props) {
    super(props);
    this.state = {dogs:[]};
    this.handleClick=this.handleClick.bind(this)
  }

  render(){

    return(
        <div>
          <img src={this.state.image}/>
          <AnswerButton handleClick={this.handleClick} text="testing"/>
          {this.state.dogs.map(d=> <div>{d}</div>)}
        </div>
      )


    // return (
    //   <div>
    //     <button onClick={this.handleClick} >
    //       click me
    //     </button>
    //     <br/>
    //     clicked: {this.state.clicked}
    //   </div>
    //   )




  
    //this is the example code i dont want to lose it just yet

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

  componentDidMount(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(result => {
      let dogJson=result.message
      let dogList=[]
      for (var dog in dogJson){
        dogList.push(dog)
      }
      this.setState({dogs:dogList})
      
    })


  }


  handleClick(){
    console.log("here")
    this.setState({
      clicked: "true"
    })
  }
}
  


export default Game;
