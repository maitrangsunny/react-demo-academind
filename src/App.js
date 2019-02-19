import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home';


class App extends Component {
  render() {
    var user = {
      name: "Susan",
      age: "27"
    }
    return (
      <div className="App">	
			    <Header intro = {"Hello World!!!"}/>
          <hr></hr>
          <Home name={'Max'} age={25} user={user}>
            <p>This is paragraph!</p>
          </Home>
      </div>
    );
  }
}

export default App;
