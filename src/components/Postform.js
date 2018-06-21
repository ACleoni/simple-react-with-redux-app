import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event){
        // Allows One function for each onChange event
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event){

        const post = {
            title: this.state.title,
            content: this.state.content
        }

        event.preventDefault();
        this.props.createPost(post);
    }

    
    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <br />
                    <div>
                        <label>Content: </label><br />
                        <textarea name="content" value={this.state.content} onChange={this.onChange} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}


export default connect(null, { createPost })(PostForm)