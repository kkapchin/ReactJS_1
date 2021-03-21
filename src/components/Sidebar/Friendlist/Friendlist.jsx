import s from './Friendlist.module.css'
import FriendlistItem from "./FriendlistElement/FriendlistItem";

const Friendlist = (props) => {

    let friendlistElement = props.state.map(f => <FriendlistItem id={f.id} name={f.name} img={f.img} />);

    return (
        <div className={s.friendlist}>
            { friendlistElement }
        </div>
    );
}

export default Friendlist;