import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavbarElement from "./NavbarElement/NavbarElement";

const Navbar = (props) => {

    let NavbarElements = props.state.map(n => <NavbarElement path={n.path} title={n.title} />);

    return (
        <nav className={s.nav}>
            { NavbarElements }
        </nav>
    );
}

export default Navbar;