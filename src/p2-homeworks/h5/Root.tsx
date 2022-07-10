import React from 'react'
import {HashRouter, NavLink} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom';
import PreJunior from './pages/PreJunior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Root() {
    return (
        <div>
        <Routes>
            <Route path='/' element={<PreJunior/>}/>
        </Routes>
        </div>
    )
}

export default Root
