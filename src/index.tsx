import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom';
import './main.scss'
import App from './p1-main/m1-ui/u1-app/App'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>
    </React.StrictMode>, document.getElementById("root")
)