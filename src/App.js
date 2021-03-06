import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AnswerButton from './AnswerButton'
import Result from './Result'
import Score from './Score'

class Game extends React.Component{

  constructor(props) {
    super(props);
    this.state = {dogs:[],correct:0, incorrect:0, answers:[]};
    this.handleClick=this.handleClick.bind(this)

  }

  render(){
    if (!this.state.error){

        return(
          <div>
            <Score correct={this.state.correct} incorrect={this.state.incorrect}/>
            <img className="dogPic" src={this.state.picture}/>
            <br/>
            {this.state.answers.map(name=> <AnswerButton key={name} handleClick={this.handleClick} text={name}/>)}
            {this.showGif()}
          </div>
        )
    }
    else{
      return (
        <p>Sorry, something went wrong try to reload the page</p>
      )
    }
  }

  componentDidMount(){
    //inital dog picture and list of breeds
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(result => {
      let dogJson=result.message
      let dogList=[]
      for (var dog in dogJson){
        dogList.push(dog)
      }
      this.setState({dogs:dogList})

      this.getNewPicture()
      
      
    }).catch(()=>this.setState({error:true}))

  }

  //pick a random dog breed and get a picture of it. 
  getNewPicture(){
    var currentDog=this.getRandomDogName()
    this.setState({currentDog:currentDog})
    fetch("https://dog.ceo/api/breed/"+currentDog+"/images/random")
    .then(picRes=>picRes.json())
    .then(pictureResult=>{
        this.setState({picture:pictureResult.message})
        this.answerButtons()
      })
    .catch(()=>this.setState({error:true}))


  }


  answerButtons(){
    //I want to make sure that the currentDog is not used at all in the wrong answers
    var answers=[
          this.state.currentDog,
          this.getRandomDogName(this.state.currentDog),
          this.getRandomDogName(this.state.currentDog),
          this.getRandomDogName(this.state.currentDog)
    ];
    shuffle(answers);
    this.setState({answers:answers})

  }

  //button handler for all the buttons.
  handleClick(event){
    console.log(event.target)

    if (event.target.value=="next"){
      this.setState({
        answered:false,
        currentDog:undefined,
        answerGif:undefined,
        picture:undefined,
        answers:[]
      })
      console.log("getting new picture")
      this.getNewPicture()
      return
    }


    this.setState({answered:true})
    if (event.target.value == this.state.currentDog){
      this.setState({correct:this.state.correct+1})
      this.getGif("yes")
    }
    else{
      this.setState({incorrect:this.state.incorrect+1})
     this.getGif("no")
    }
  
  }

  getGif(value){
    fetch('https://yesno.wtf/api/?force='+value)
    .then(res => res.json())
    .then(result => this.setState({"answerGif":result.image}))
    .catch(()=>this.setState({error:true}))
  }

  showGif(){
    if (this.state.answered){
      return <Result handleClick= {this.handleClick}pic={this.state.answerGif}/>
    }
    return 
  }


  getRandomDogName(dontUse=""){
    //make sure not to use a certain dog name
      var dog=dontUse;
      while (dog == dontUse){
        var i=Math.floor(Math.random()* this.state.dogs.length)
        dog=this.state.dogs[i]
      }
      return dog
  }
}
  
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

export default Game;
