import s from './Content.module.css';
import Profile from "./Profile";
import MyPosts from "./MyPosts";

const Content = () => {
    return (
        <div>
            <img src="https://vignette2.wikia.nocookie.net/alienfilmspedia/images/4/48/USCSS_Nostromo_002.jpg/revision/latest?cb=20111224171809" alt=""/>
            <Profile />
            <MyPosts />
        </div>
    );
}

export default Content;