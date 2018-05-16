import React, { Component } from 'react';

class ProjectItem extends Component {
    render(){

        return (
            <li className="Projects">
                <h2>It is {this.props.project.title}</h2>
            </li>
        )
    }
}
export default ProjectItem;