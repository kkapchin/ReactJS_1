import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Projects from "./components/Projects/Projects";
import Settings from "./components/Settings/Settings";
import {Component} from "react";

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <Header/>
                    <Navbar navbar={this.props.navbar}/>
                    <div className="app-wrapper-content">
                        <Route path='/profile' render={() =>
                            <Content
                                posts={this.props.posts}
                            />}/>
                        <Route path='/dialogs' render={props =>
                            <Dialogs
                                messages={this.props.messages}
                                dialogs={this.props.dialogs}
                            />}/>
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


