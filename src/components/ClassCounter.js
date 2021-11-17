import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
    incrementCount = () => {
        this.setState(prevState =>({
            count: prevState.count + 1 
        }))
    }

    incrementFive = () => {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementFive}>Count - {this.state.count} </button>
            </div>
        )
    }
}

export default ClassCounter
