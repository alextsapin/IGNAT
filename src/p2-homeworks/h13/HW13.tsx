import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, AppStoreType} from '../h10/bll/store';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {responseType} from './reducer';
import {setErrorAC, setInfo} from './reducer';

const HW13 = () => {
    const dispatch = useDispatch<AppDispatch>();

    const error = useSelector<AppStoreType, boolean>(state => state.hw13.error)
    const response = useSelector<AppStoreType, responseType>(state => state.hw13.response)

    function setErrorHandler(isError: boolean) {
        dispatch(setErrorAC(isError))
    }

    function sendRequest(isError: boolean) {
        dispatch(setInfo(isError))
    }
    
    return (
        <div>
            <hr/>
            <h2>Home work № 13</h2>
            <div className="row">
                <div className="col-md-4">
                    <h3>Запрос на сервер</h3>
                    <SuperCheckbox onChange={e => setErrorHandler(e.currentTarget.checked)}>Добавить ошибку в запросе</SuperCheckbox><br/><br/>
                    <SuperButton onClick={() => sendRequest(!error)}>Отправить</SuperButton>
                </div>
                <div className="col-md-8">
                    <h3>Ответ сервера</h3>
                    <p>{response.errorText}</p>
                    <p>{response.info}</p>
                </div>
            </div>
        </div>
    );
}

export default HW13;
