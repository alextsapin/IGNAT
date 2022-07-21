import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type userType = {
    _id: number
    name: string
    age: number 
}

export type stateType = Array<userType>

const initialPeople: stateType = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

// Actions
export type sortUpActionType = {
    type: 'SORT_UP'
}

export const sortUpAction = {
    type: 'SORT_UP' as const
}

export type sortDownActionType = {
    type: 'SORT_DOWN'
}

export const sortDownAction = {
    type: 'SORT_DOWN' as const
}

export type check18ActionType = {
    type: 'CHECK_18'
}

export const check18Action = {
    type: 'CHECK_18' as const
}

function HW8() {
    const [people, setPeople] = useState<stateType>(initialPeople)

    const finalPeople = people.map((p: userType, index: number) => (
        <tr key={index}>
            <td>{p.name}</td>
            <td>{p.age}</td>
        </tr>
    ))

    // Functions
    const sortUp = () => setPeople(
        homeWorkReducer(initialPeople, sortUpAction)
    )

    const sortDown = () => setPeople(
        homeWorkReducer(initialPeople, sortDownAction)
    )

    const check18 = () => setPeople(
        homeWorkReducer(initialPeople, check18Action)
    )

    return (
        <div>
            <hr/>
            <h2>Home work № 8</h2>

            <div className="row">
                <div className="col-lg-6">
                    <table className="table table-dark">
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                        </tr>
                        </thead>
                        <tbody>
                            {finalPeople}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <SuperButton className='me-2' onClick={sortUp}>Sort up</SuperButton>
                <SuperButton className='me-2' onClick={sortDown}>Sort down</SuperButton>
                <SuperButton onClick={check18}>Check 18</SuperButton>
            </div>
        </div>
    )
}

export default HW8