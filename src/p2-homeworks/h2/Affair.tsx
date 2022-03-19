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
        <tr>
            <td>{props.affair}</td>
            <td>{props.priority}</td>
            <td><button className="btn btn-light" onClick={deleteCallback}>❌</button></td>
        </tr>
    )
}

export default Affair;