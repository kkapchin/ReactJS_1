import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostElement} from "./Redux/state";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPost={addPost}
                 updateNewPostElement={updateNewPostElement}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}



