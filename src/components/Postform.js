import React, { Component } from 'react';
import  { URL } from '../api/jsonplacehoder'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event){
        // Allows One function for each onChange event
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event){
        event.preventDefault();

        const post = {
            title: this.state.title,
            content: this.state.content
        }

        fetch(`${URL}/posts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
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

export default PostForm