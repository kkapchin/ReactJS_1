import s from './Chat.module.css';
import ChatlistItem from "../ChatlistItem/ChatlistItem";
import MessageItem from "./MessageItem/MessageItem";

const Chat = (props) => {

    let Messages = props.state.map(m => <MessageItem message={m.message}/>);

    return (
        <div className={s.chat}>
            <div>
                { Messages }
            </div>
            <div className={s.input}>
                <div className={s.inputArea}>
                    <textarea name="" id="" cols="60" rows="5"></textarea>
                </div>
                <div className={s.btn}>
                    <button >Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;