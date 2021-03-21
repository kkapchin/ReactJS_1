import s from './ChatlistItem.module.css'
import {NavLink} from "react-router-dom";

const ChatlistItem = (props) => {
    let path = '/messenger/' + props.id;
    let avatar = props.img;
    console.log('props', props);
    return (
        <div className={s.dialogItem}>
            <div>
                <img src={avatar} />
            </div>
            <div className={s.users}>
                <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
            </div>            
        </div>
    );
}

export default ChatlistItem;