import React, { Component } from 'react';

class ProjectItem extends Component {
    render(){

        return (
            <li className="Project">
                <h2>Title: {this.props.project.title}</h2>
                <h3><smal>Category:</smal> {this.props.project.category}</h3>
            </li>
        )
    }
}
export default ProjectItem;