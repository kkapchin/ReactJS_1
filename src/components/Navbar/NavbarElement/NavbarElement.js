import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import {Component} from "react";

const NavbarElement = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={props.path} activeClassName={s.active}>{props.title}</NavLink>
        </div>
    );
}

export default NavbarElement;
