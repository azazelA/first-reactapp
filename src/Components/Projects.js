import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
    render(){
        console.log(this.props.projects)
        // (this.props.projects) ? projectNames = this.props.projects.map(projectName => {
        //     console.log(projectName)
        // })
        let projectNames
        if(this.props.projects){
            projectNames = this.props.projects.map(projectName => {
                return (
                    <ProjectItem project={projectName} key={projectName.title}/>
                )
            })
        }
        return (
            <div className="Projects">
                {projectNames}
            </div>
        )
    }
}
export default Projects;