import React, { Component } from 'react';
import Projects from './Components/Projects';

class Smk extends Component {
    constructor() {
        super();
        // State is always defined inside the constructor
        this.state = {
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
        };
    }
    render(){
        return (
            <div className="App">
                <p>My Apps</p>
                <Projects projects={this.state.projects}/>

            </div>
        )
    }
}
// export default App;
export default Smk;