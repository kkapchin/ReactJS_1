import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Component} from "react";

class Dialogs extends Component {

    render() {

        let Dialogs = this.props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);

        let Messages = this.props.state.messages.map(m => <MessageItem message={m.message}/>);

        return (
            <div className={s.dialogs}>
                <div>
                    { Dialogs }
                </div>
                <div>
                    { Messages }
                </div>
            </div>
        );
    }
}

export default Dialogs;