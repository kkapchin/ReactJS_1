import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dialogs from "./components/Dialogs/Dialogs";

let messages = [
    {id: 1, message: 'Zdarowa bichixi'},
    {id: 2, message: 'qq yopta'},
    {id: 3, message: 'Just Fun'},
    {id: 4, message: 'Prevet'},
];

let dialogs = [
    {id: 1, name: 'Madarka'},
    {id: 2, name: 'Bloody'},
    {id: 3, name: 'Dedist'},
    {id: 4, name: 'Ferich'}
];

let posts = [
    {id: 3, message: 'qq yopta', likesCount: 1},
    {id: 2, message: 'All cops are bitches', likesCount: 666},
    {id: 1, message: 'Hello world', likesCount: 13},
];

let navbar = [
    {path: '/profile', title: 'Profile'},
    {path: '/dialogs', title: 'Messenger'},
    {path: '/news', title: 'News'},
    {path: '/projects', title: 'Projects'},
    {path: '/settings', title: 'Settings'}
];

ReactDOM.render(
  <React.StrictMode>
    <App
        messages={messages}
        dialogs={dialogs}
        posts={posts}
        navbar={navbar}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


