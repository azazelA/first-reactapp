import React, { Component } from 'react';

class AddProject extends Component {
    static defaultProps = {
        categories: ['Surveillance System', 'Lead Generation', "Security"]
    }
    handleSubmit(e){
        console.log('Submitted')
        e.preventDefault();
    }
    render(){
        let categoryOptions = this.props.categories.map(category => {
            return <option key={category}>{category}</option>
        })
        return (
            <div className="AddProject">
                <form onSubmit={this.handleSubmit}>
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