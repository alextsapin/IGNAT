import React, {useState} from 'react'
import Affairs from './Affairs'
import css from './style.module.scss'

// types
export type AffairPriorityType = any // need to fix any

export type AffairType = {
    id: number
    name: string
    priority: string
}

export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: any, filter: any): any => {
    if (filter === 'all') return affairs
    else return // need to fix
}



const HW2 = () => {
    const [affairs, setAffairs] = useState(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter);

    function deleteAffairCallback (id: number) {
        const filteredAffairs = affairs.filter(item => item.id !== id);
        console.log(filteredAffairs)
        setAffairs(filteredAffairs);
    }

    return (
        <div>
            <hr/>
            <h2>homeworks 2</h2>

            <Affairs
                data={affairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
        </div>
    )
}

export default HW2
