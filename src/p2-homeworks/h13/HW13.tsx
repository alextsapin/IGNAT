import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {ignatApi} from "./api";


const HW13 = () => {
    const [error, setError] = React.useState(false);

    function sendRequest(isError: boolean) {
        ignatApi.sendRequest(isError)
    }
    
    return (
        <div>
            <hr/>
            <h2>Home work № 13</h2>
            <SuperCheckbox onChange={e => setError(e.currentTarget.checked)}>Ошибка в запросе</SuperCheckbox><br/><br/>
            <SuperButton onClick={() => sendRequest(!error)}>Отправить</SuperButton>
        </div>
    );
}

export default HW13;
