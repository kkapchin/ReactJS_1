import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialogs from "../Dialogs";

const MessageItem = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
}
export default MessageItem;