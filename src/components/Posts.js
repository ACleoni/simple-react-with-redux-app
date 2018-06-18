import React, { Component } from 'react';
import  { URL } from '../api/jsonplacehoder'

class Posts extends Component {

    componentWillMount() {
        fetch(`${URL}/posts`)
            .then(res => res.json())
            .then(data => console.log(data));
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}

export default Posts