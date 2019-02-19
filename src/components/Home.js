import React, { Component } from 'react';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age,
            status: 0
        }
        setTimeout(()=>{
            this.setState({
                status:1
            })
        },5000)
    }
    add(){
        this.setState({
            age: this.state.age+3
        })
    }
    render(){
        console.log(this.props);
        return(
           <div>
               <h1>This is a homepage</h1>
               {this.props.name}
               {this.state.age}
               {this.props.children}
               {this.state.status}
               <button onClick = {()=>this.add()}>Add Three</button>
           </div>
        )
    }
}