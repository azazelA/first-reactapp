import React, { Component } from 'react';
import uuid from 'uuid';
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
                    id: uuid.v4(),
                    title: "Video Surveillance System",
                    category: "Security"
                },
                {
                    id: uuid.v4(),
                    title: "Live Leads",
                    category: "B2B lead generation"
                },
                {
                    id: uuid.v4(),
                    title: "Road Navigator",
                    category: "Directions & Navigation"
                }
            ]
        })
    }
    handleAddProject(newProject){
        let currentProjects = this.state.projects;
        currentProjects.push(newProject);
        this.setState({projects: currentProjects});
    }
    render(){
        return (
            <div className="App">
                <h1>Self Projects <span><img src={logo} alt="Self Projects"/></span></h1>
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <Projects projects={this.state.projects}/>

            </div>
        )
    }
}
// export default App;
export default Smk;