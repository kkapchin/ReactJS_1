import s from './Sidebar.module.css';
import Friendlist from "./Friendlist/Friendlist";
import Navbar from "./Navbar/Navbar";

const Sidebar = (props) => {

    return (
        <div className={s.sidebar}>
            <div>
                <Navbar state={props.state.navbar}/>
            </div>
            <div>
                <div className={s.title}>
                    Friends
                </div>
                <Friendlist state={props.state.friendlist}/>
            </div>
        </div>

    );
}

export default Sidebar;