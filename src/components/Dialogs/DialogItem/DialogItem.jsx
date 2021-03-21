import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
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

export default DialogItem;