import s from './Sidebar.module.css';
import Friendlist from "./Friendlist/Friendlist";
import Navbar from "./Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";

const Sidebar = (props) => {

    return (
        <div className={s.sidebar}>
            <div>
                <Navbar state={props.state.navbar}/>
            </div>
            <div>
                <Route path='/profile' render={() => <Friendlist state={props.state.friendlist}/>}/>
            </div>
        </div>

    );
}

export default Sidebar;