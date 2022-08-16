import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(80)

    return (
        <div>
            <hr/>
            <h2>Home work № 11</h2>
            <SuperRange value={value1} disabled={false} min={0} max={100} step={1}setValue={setValue1}/>

            <br></br>

            <SuperDoubleRange 
                value1={value1} 
                value2={value2} 
                disabled={false}
                min={0}
                max={100}
                step={1}
                setValue1={setValue1} 
                setValue2={setValue2} 
            />
        </div>
    )
}

export default HW11
