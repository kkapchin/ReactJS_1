import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div>
            { postsElements }
        </div>
    );
}

export default MyPosts;