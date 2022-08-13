import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {AppDispatch, AppStoreType } from "../h10/bll/store";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeAC, themeType} from "./bll/themeReducer";
import css from "./HW12.module.scss";

const themes = ['white', 'some', 'dark', 'red'];

const HW12 = () => {
    const theme = useSelector<AppStoreType, themeType>(state => state.theme.theme);

    const dispatch = useDispatch<AppDispatch>();

    function changeTheme(value: themeType) {
        dispatch(changeThemeAC(value))
    }

    return (
        <div>
            <hr/>
            <div className={css[theme]}>
                <h2 className={css[theme + '-text'] + ' p-3'}>Home work № 12</h2>
            </div>
            <SuperRadio name='radio' options={themes} value={theme} onChangeOption={e => changeTheme(e)}/>
        </div>
    )
}

export default HW12;