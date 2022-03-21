import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

export type UserType = {
    id: any
    name: any
}

// Уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([])

    const addUserCallback = (name: any) => {
        setUsers([])
    }

    return (
        <div>
            <h2>Home work № 3</h2>
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3;