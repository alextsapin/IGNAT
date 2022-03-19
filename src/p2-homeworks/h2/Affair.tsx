import React from 'react';
import css from './style.module.scss';

type AffairPropsType = {
    id: number
    affair: string
    priority: string
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {

    const deleteCallback = () => {
        props.deleteAffairCallback(props.id)
    }

    return (
        <div className="row bg-dark p-2">
            <div className="col-md-4 d-flex flex-column justify-content-center">{props.affair}</div>
            <div className="col-md-4 d-flex flex-column justify-content-center">{props.priority}</div>
            <div className="col-md-4"><button className="btn btn-light" onClick={deleteCallback}>❌</button></div>
        </div>
    )
}

export default Affair;