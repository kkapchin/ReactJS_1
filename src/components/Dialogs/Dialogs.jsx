import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

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

    let dialogs = users.map(d => <Dialog name={d.name} id={d.id}/>);

    let message = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs.users}>
                Dialogs
                { dialogs }
            </div>
            <div className={s.dialogs.messages}>
                Messages
                { message }
            </div>
        </div>
    );
}

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
}
export default Dialogs;