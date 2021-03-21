import s from '../../Messenger.module.css';
import {NavLink} from "react-router-dom";
import Messenger from "../../Messenger";

const MessageItem = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
}
export default MessageItem;