import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    render(){
        let projectNames;
        if(this.props.projects){
            projectNames = this.props.projects.map(projectName => {
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} project={projectName} key={projectName.title}/>
                )
            })
        }
        return (
            <div className="currentProjects">
                <h2>Current Projects</h2>
                <ul className="Projects">
                    {projectNames}
                </ul>
            </div>
        )
    }
}
export default Projects;