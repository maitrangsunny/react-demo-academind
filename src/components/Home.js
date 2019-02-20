import React, { Component } from 'react';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age,
            status: 0,
            homeLink: props.initialValue
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
        });
    }
    changeLink(){
        this.props.changeLink(this.state.homeLink);
    }
    handleChange(e){
        this.setState({
            homeLink : e.target.value
        });
    }
    render(){
        return(
           <div>
               <h1>This is a homepage</h1>
               {this.props.name}
               {this.state.age}
               {this.props.children}
               {this.state.status}
               <button onClick = {()=>this.add()}>Add Three</button>
               <button onClick = {this.props.greet}>Greet</button>
               <input 
                    type="text" 
                    value={this.state.homeLink}
                    onChange={(e)=>{this.handleChange(e)}} />
               <button onClick={this.changeLink.bind(this)}>Change Link</button>
               
           </div>
        )
    }
}