import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    render(){
        let projectNames;
        if(this.props.projects){
            projectNames = this.props.projects.map(projectName => {
                return (
                    <ProjectItem project={projectName} key={projectName.title}/>
                )
            })
        }
        return (
            <ul className="Projects">
                {projectNames}
            </ul>
        )
    }
}
export default Projects;