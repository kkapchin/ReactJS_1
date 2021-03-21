import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Messenger from "./components/Messenger/Messenger";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Projects from "./components/Projects/Projects";
import Settings from "./components/Settings/Settings";
import {Component} from "react";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Sidebar state={this.props.state.sidebar}/>
                    <div className="app-wrapper-content">
                        <Route path='/profile' render={() =>
                            <Content state={this.props.state.profilePage} />}/>
                        <Route path='/messenger' render={props =>
                            <Messenger state={this.props.state.messagesPage} />}/>
                        <Route path='/news' component={News}/>
                        <Route path='/projects' component={Projects}/>
                        <Route path='/settings' component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;


