import React from 'react'
import {NavLink} from 'react-router-dom'
import css from './Header.module.scss'
import point from '../../../images/point.png'

function Header() {
    return (
        <div className={css.nav}>
            <ul className={css.menu}>
                <li className={css.item}>
                    <NavLink to="/" className={css.link}>Prejunior</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/" className={css.link}>Junior</NavLink>
                </li>
                <li className={css.item}>
                    <NavLink to="/" className={css.link}>Junior+</NavLink>
                </li>
                <li className={css.item}>
                    <img src={point} alt="point"/>
                </li>
            </ul>
        </div>
    )
}

export default Header
