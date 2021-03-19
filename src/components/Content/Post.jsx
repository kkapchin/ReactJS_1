import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.item}>
            <div>
                { props.message }
            </div>
            <div>
                <span>like </span>{ props.likesCount }
            </div>
        </div>
    );
}

export default Post;