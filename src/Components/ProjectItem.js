import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddProject from "./AddProject";
class ProjectItem extends Component {
    deleteProject (id){
        this.props.onDelete(id);
    }
    render(){
        return (
            <li className="ProjectItem">
                <h4><small>Title:</small> {this.props.project.title}</h4>
                <p><small>Category:</small> {this.props.project.category}</p>
                <button className="delete" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</button>
            </li>
        )
    }
}
AddProject.propTypes = {
    project: PropTypes.array,
    onDelete: PropTypes.func
}
export default ProjectItem;