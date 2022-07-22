import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom';
import App from './p1-main/m1-ui/u1-app/App';
import {Provider} from 'react-redux';
import './main.scss';
import store from "./p2-homeworks/h10/bll/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>
    </React.StrictMode>, document.getElementById("root")
)