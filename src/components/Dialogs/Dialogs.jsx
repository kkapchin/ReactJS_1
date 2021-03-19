import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {

    let users = [
        {id: 1, name: 'Madarka'},
        {id: 2, name: 'Bloody'},
        {id: 3, name: 'Dedist'},
        {id: 4, name: 'Ferich'}
    ];

    let messages = [
        {id: 1, message: 'Zdarowa bichixi'},
        {id: 2, message: 'qq yopta'},
        {id: 3, message: 'Just Fun'},
        {id: 4, message: 'Prevet'},
    ]

    let Dialogs = users.map(d => <DialogItem name={d.name} id={d.id}/>);

    let Messages = messages.map(m => <MessageItem message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs.users}>
                Dialogs
                { Dialogs }
            </div>
            <div className={s.dialogs.messages}>
                Messages
                { Messages }
            </div>
        </div>
    );
}

export default Dialogs;