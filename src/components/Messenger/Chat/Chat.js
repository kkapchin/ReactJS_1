import s from './Chat.module.css';
import React from 'react';
import MessageItem from "./MessageItem/MessageItem";

const Chat = (props) => {

    let newMessage = React.createRef();

    let Messages = props.state.map(m => <MessageItem message={m.message}/>);

    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.chat}>
            <div>
                { Messages }
            </div>
            <div className={s.input}>
                <div className={s.inputArea}>
                    <textarea ref={ newMessage } cols="60" rows="5"></textarea>
                </div>
                <div className={s.btn}>
                    <button onClick={ sendMessage }>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Chat;