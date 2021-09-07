import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){  
        super(props); 
        this.state = { attribute : new Date().toLocaleTimeString() }; 
   }
   componentDidMount(){
      this.timee = setInterval(()=> {this.setState({attribute: new Date().toLocaleTimeString()})},1000); 
   }
   componentWillUnmount(){
       clearInterval(this.timee);
   }

    render() {
        return(
            <>
            <div className="Clock">
                <h3 id="time">{this.state.attribute}</h3>
            </div>
            </>
        )
    }
}


export default App;
