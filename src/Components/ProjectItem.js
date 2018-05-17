import React, { Component } from 'react';

class ProjectItem extends Component {
    render(){

        return (
            <li className="ProjectItem">
                <h4><small>Title:</small> {this.props.project.title}</h4>
                <p><small>Category:</small> {this.props.project.category}</p>
            </li>
        )
    }
}
export default ProjectItem;