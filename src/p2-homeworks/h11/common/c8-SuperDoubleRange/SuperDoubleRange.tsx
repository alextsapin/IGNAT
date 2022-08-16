import React from 'react';
import {Range} from 'react-range';

type propsType = {
    value1: number
    value2: number
    setValue1: (value: number) => void
    setValue2: (value: number) => void
}

const SuperSimple = (props: propsType) => {

    function setValues(values: number[]) {
        props.setValue1(values[0])
        props.setValue2(values[1])
    }

    return (
        <div>
            {props.value1}
            <Range step={1} min={0} max={100} values={[props.value1, props.value2]} onChange={(values) => setValues(values)} renderTrack={({props, children}) => (
                <div {...props} style={{ ...props.style, height: '6px', width: '200px', backgroundColor: 'white'}}>
                    {children}
                </div>
                )}
                renderThumb={({ props }) => (
                    <div {...props} style={{...props.style, height: '20px', width: '20px', backgroundColor: '#0D6EFD', borderRadius: '50%'}}/>
                )}
            />
            {props.value2}
        </div>
    )
}

export default SuperSimple;