import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Component} from "react";

class Dialogs extends Component {

    render() {

        let Dialogs = this.props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

        let Messages = this.props.messages.map(m => <MessageItem message={m.message}/>);

        return (
            <div className={s.dialogs}>
                <div className={s.dialogs.users}>
                    Dialogs
                    { Dialogs }
                </div>
                <div className={s.dialogs.messages}>
                    Messages
                    {Messages}
                </div>
            </div>
        );
    }
}

export default Dialogs;