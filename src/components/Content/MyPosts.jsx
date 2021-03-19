import Post from "./Post";

const MyPosts = (props) => {

    let posts = [
        {id: 3, message: 'qq yopta', likesCount: 1},
        {id: 2, message: 'All cops are bitches', likesCount: 666},
        {id: 1, message: 'Hello world', likesCount: 13},
    ];

    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    return (
        <div>
            { postsElements }
        </div>
    );
}

export default MyPosts;