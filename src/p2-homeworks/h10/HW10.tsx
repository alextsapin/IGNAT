import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store'


const Preloader = () => {
    return <div className="spinner-border text-light" role="status"></div>
}

const HW10 = () => {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.loading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=> {
            dispatch(loadingAC(false))
        }, 2000)
    }

    return (
        <div>
            <hr/>
            <h2>Home work № 10</h2>

            {loading
                ? <Preloader/>
                : (
                    <div>
                        <SuperButton onClick={setLoading}>Set loading...</SuperButton>
                    </div>
                )
            }
        </div>
    )
}

export default HW10