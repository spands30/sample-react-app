//import react step
// logic
//export the stuff
import React,{Component} from 'react';

class Hello extends React.Component{
    constructor(){
        super()
        this.state={
            fullname:"Sample Text"
        }
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        //console.log("Helllloooo")
        this.setState({
            fullname:"some small text"
        })
    }

render(){

    return(
        <div>
        <h1>Hello {this.props.name}</h1>
        <p>My location {this.props.location}</p>
        {this.state.fullname}
        <button onClick={this.handleClick}>click</button>
        </div>
    )

}
}
export default Hello;
