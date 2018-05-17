import React, { Component } from 'react';
import './App.css'
import Projects from './Components/Projects';
import logo from './logo.svg';
import AddProject from './Components/AddProject';

class Smk extends Component {
    constructor() {
        super();
        // State is always defined inside the constructor
        this.state = {
            projects: []
        };
    }
    componentWillMount(){
        this.setState({
            projects: [
                {
                    title: "Video Surveillance System",
                    category: "Security"
                },
                {
                    title: "Live Leads",
                    category: "B2B lead generation"
                },
                {
                    title: "Road Navigator",
                    category: "Directions & Navigation"
                }
            ]
        })
    }

    render(){
        return (
            <div className="App">
                <h1>Self Projects <span><img src={logo} alt="Self Projects"/></span></h1>
                <AddProject />
                <Projects projects={this.state.projects}/>

            </div>
        )
    }
}
// export default App;
export default Smk;