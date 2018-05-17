import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor(){
        super();
        this.state = {
            newProject: {}
        }
    }
    static defaultProps = {
        categories: ['Select an option', 'Directions & Navigation', 'Web Scrapping', "Security"]
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.refs.title.value && this.refs.category.value){
        this.setState({newProject:{
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
            }}, function () {
            this.props.addProject(this.state.newProject)
        })
        }else {
            alert('You cannot submit blank data!')
        }
    }
    render(){
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category} value={category}>{category}</option>
        })
        return (
            <div className="AddProject">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input-field input">
                        <label htmlFor="title">Title:</label>
                        <input type="text" ref="title"/>
                    </div>
                    <div className="input-field select">
                        <label htmlFor="category">Category:</label>
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>
                    <div className="input-field submit">
                        <input type="submit" value="Add New Project"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddProject;