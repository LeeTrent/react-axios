import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {
        console.log("[Blog][componentDidMount] => BEGIN");
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState( {posts: updatedPosts} );
                console.log(response);
            })
            .catch(error => {
                this.setState( {error: true} );
                console.log("[Blog][componentDidMount]=>");
                console.log(error);
                console.log("<=[Blog][componentDidMount]");
                console.log("[Blog][componentDidMount]=>");
                console.log(this.state);
                console.log("<=[Blog][componentDidMount]");                
            });
        console.log("[Blog][componentDidMount] => END");
    }
    postSelectedHandler = (id) => {
        this.setState( {selectedPostId: id} );
    }
    render () {
        let posts = <p style={ {textAlign: 'center', color: 'red', fontWeight: 'bold', backgroundColor: 'yellow', padding: '5px', border: '3px solid red'} }>Something went wrong :( </p>;

        if ( !this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={ () => this.postSelectedHandler(post.id) } />
            });
        }    

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;