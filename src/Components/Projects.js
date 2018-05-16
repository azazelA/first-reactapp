import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        // State is always defined inside the constructor
        this.state = {date: new Date()};
    }
    // Lifecycle Hooks
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        // Set State
        this.setState({
            date: new Date()
        });
    }
    render(){
        return (
            <div className="Projects">
                <h1>My Timer</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
export default Projects;