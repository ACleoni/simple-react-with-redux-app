import React, { Component } from 'react';
import  { URL } from '../api/jsonplacehoder'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        fetch(`${URL}/posts`)
            .then(res => res.json())
            .then(data => this.setState({posts: data}));
    }
    render() {
        const PostInfo = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>

        ))
        return (
            <div>
                <h1>Posts</h1>
                {PostInfo}
            </div>
        )
    }
}

export default Posts