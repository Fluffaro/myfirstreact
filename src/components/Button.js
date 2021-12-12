import React from "react";

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCounter =()=> {
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    render(){
        return(
            <div>
                <button onClick = {this.addCounter}>Click to pick meredith</button>
                <p>Meredith's been chosen {this.state.count} times</p>
            </div>
        )
    }
}

export default Button