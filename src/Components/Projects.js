import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
    deleteProject(id){
        this.props.onDelete(id);
    }
    render(){
        let projectItems;
        if(this.props.projects){
            projectItems = this.props.projects.map(projectItem => {
                return (
                    <ProjectItem onDelete={this.deleteProject.bind(this)} project={projectItem} key={projectItem.title}/>
                )
            })
        }
        return (
            <div className="currentProjects">
                <h2>Current Projects</h2>
                <ul className="Projects">
                    {projectItems}
                </ul>
            </div>
        )
    }
}
Projects.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func
}
export default Projects;