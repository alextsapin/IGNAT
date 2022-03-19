import React from 'react';
import Affair from './Affair';
import {AffairType} from './HW2';
import css from './style.module.scss';

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (priority: string) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a.id}
            id={a.id}
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    return (
        <div>
            <div className={'container mb-3 ' + css.box}>
                {mappedAffairs}
            </div>

            <button className="btn btn-primary me-3" onClick={() => props.setFilter('all')}>All</button>
            <button className="btn btn-danger me-3" onClick={() => props.setFilter('high')}>High</button>
            <button className="btn btn-warning me-3" onClick={() => props.setFilter('middle')}>Middle</button>
            <button className="btn btn-success" onClick={() => props.setFilter('low')}>Low</button>
        </div>
    )
}

export default Affairs;