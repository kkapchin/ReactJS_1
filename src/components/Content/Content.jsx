import s from './Content.module.css';
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";

const Content = (props) => {
    return (
        <div>
            <img src="https://vignette2.wikia.nocookie.net/alienfilmspedia/images/4/48/USCSS_Nostromo_002.jpg/revision/latest?cb=20111224171809" alt=""/>
            <Profile />
            <MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Content;