import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: any
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

    const setAll = () => {} // need to fix
    const setHigh = () => {}
    const setMiddle = () => {}
    const setLow = () => {}

    return (
        <div>
            <table className="table table-dark">
                <tbody>
                    {mappedAffairs}
                </tbody>
            </table>

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
