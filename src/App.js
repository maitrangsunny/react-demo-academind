import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Home} from './components/Home';

import {Root} from './components/Root';



class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			homeLink : "Home"
		}
		console.log("Constructor");
	}
  
	onGreet(){
		alert("Hello!!!");
	}

	changeLink(newname){
		console.log(newname);
		this.setState({
			homeLink: newname
		});
	}
	componentWillMount(){
		console.log("Component will mount");
	}
	componentDidMount(){
		console.log("Component did mount");
	}
	componentWillReceiveProps(){
		console.log("Component will receive props");
	}
	shouldComponentUpdate(){
		console.log("Component should update");
		return true;
	}
	componentWillUpdate(){
		console.log("Component will update")
	}
	render() {
		console.log("render");
		var user = {
		name: "Susan",
		age: "27"
		}
		return (
		<div className="App">	
			<Header intro = {this.state.homeLink} />
			<hr></hr>
			<Home name={'Max'} 
					age={25} user={user} 
					greet={this.onGreet} 
					changeLink={this.changeLink.bind(this)}
					initialValue={this.state.homeLink}
					>
				<p>This is paragraph!</p>
			</Home>

		</div>
		);
	}
}

export default App;
