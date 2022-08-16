import React from 'react';
import {Range} from 'react-range';
import css from './css.module.scss';

type propsType = {
    value1: number
    value2: number
    disabled: boolean
    min: number
    max: number
    step: number
    setValue1: (value: number) => void
    setValue2: (value: number) => void
}

const SuperDoubleRange = (props: propsType) => {

    function setValues(values: number[]) {
        props.setValue1(values[0])
        props.setValue2(values[1])
    }

    return (
        <div className={css.wrap}>
            <p className={css.number}>{props.value1}</p>
            <Range disabled={props.disabled} step={props.step} min={props.min} max={props.max} values={[props.value1, props.value2]} onChange={(values) => setValues(values)} renderTrack={({props, children}) => (
                <div {...props} className={css.line}>
                    {children}
                </div>
                )}
                renderThumb={({ props }) => (
                    <div {...props} style={{...props.style, height: '20px', width: '20px', backgroundColor: '#0D6EFD', borderRadius: '50%'}}/>
                )}
            />
            <p className={css.number}>{props.value2}</p>
        </div>
    )
}

export default SuperDoubleRange;