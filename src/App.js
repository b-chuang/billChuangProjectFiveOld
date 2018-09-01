import React, { Component } from 'react';
import './App.css';
import firebase from '../src/firebase'

/* COMPONENTS */
import Gallery from './Components/Gallery';
import Form from './Components/Form';
import Scores from './Components/Scores';

const timeRef = firebase.database().ref('/count');

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      count: 0,
      showResults: false,
      listOfNames: [],
      currentTextValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

addToList = (time) => {
    console.log(time);
    timeRef.push({
      item: time,
    })
  }

componentDidMount() {
    timeRef.on('value', (snapshot) => {
      console.log(snapshot.val());
      this.setState({
        time: snapshot.val(),
      })
    })}

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({ count: (this.state.count + 1) })
  }

  startTimer() {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }

  stopTimer() {
    clearInterval(this.timer)
    this.setState({ 
      showResults: true,
    })
  }


  resetTimer() {
    this.setState({ count: this.state.count = 0 })
  }

  timeFormatting() {
    //if the  number is less than 9 concat 0 to the string.
    // use modulo % 60
    // 
  }

  handleChange = (e) => {
    /* console.dir(e.target.value); */
    this.setState({
      currentTextValue: e.target.value,

    });
  }

  handleSubmit(e) {
    // prevent the page from rerendering
    e.preventDefault();
    // check to make sure there's some content in the input
    if (!this.state.currentTextValue.length) {

      console.log(this.state);
      
      return;
    }

    const newindividualListItem = {
      currentTextValue: this.state.currentTextValue,
      id: Date.now(),
      count: this.state.count
    };
    
    this.setState(prevState => ({
      listOfNames: prevState.listOfNames.concat(newindividualListItem),
      currentTextValue: ""
    }));
  
    

  }    
  render = () => {
    return (  
      <div className="App">
        <div className='Timer'>
          <h1>{this.state.count}</h1>
          <div>
            <button onClick={this.startTimer.bind(this)}>Start</button>
            <button onClick={this.stopTimer.bind(this)}>Stop</button>
            <button onClick={this.resetTimer.bind(this)}>Reset</button>
          </div>
        </div>

        <div className ="Gallery">
        <Gallery count={this.state.count}/>
        </div>
        <div>
          {/* {time} */}
        </div>

        <div className ="finalTime">
          <Form
            onSubmit={this.handleSubmit} 
            addToList={this.addToList} 
            count={this.state.count}
            showResults={this.state.showResults} />

          <Scores 
            listOfNames={this.state.listOfNames} />
          
        </div>
      </div>
    );
  }

}


export default App;
