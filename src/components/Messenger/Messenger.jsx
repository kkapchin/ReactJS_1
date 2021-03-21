import s from './Messenger.module.css';
import ChatlistItem from "./ChatlistItem/ChatlistItem";
import {Component} from "react";
import Chat from "./Chat/Chat";

class Messenger extends Component {

    render() {

        let Chatlist = this.props.state.dialogs.map(d => <ChatlistItem name={d.name} id={d.id} img={d.img}/>);

        return (
            <div className={s.messenger}>
                <div className={s.chatlist}>
                    { Chatlist }
                </div>
                <div className={s.chat}>
                    <Chat state={this.props.state.messages}/>
                </div>
            </div>
        );
    }
}

export default Messenger;