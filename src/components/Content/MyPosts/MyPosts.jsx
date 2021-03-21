import React from 'react';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div>
                <textarea ref={newPostElement} cols="60" rows="5"></textarea>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;