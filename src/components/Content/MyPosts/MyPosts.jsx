import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }


    return (
        <div>
            <div className={s.input}>
                <textarea ref={newPostElement} cols="60" rows="5"></textarea>
            </div>
            <div className={s.button}>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div>
                { postsElements }
            </div>
        </div>
    );
}

export default MyPosts;