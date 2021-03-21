import s from './FriendlistItem.module.css'
import {NavLink} from "react-router-dom";

const FriendlistItem = (props) => {
    let path = '/' + props.id;
    let avatar = props.img;

    return (
        <div className={s.friendlistItem}>
            <div>
                <img src={avatar} />
            </div>
            <div className={s.names}>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>            
        </div>
    );
}

export default FriendlistItem;