import React from 'react';
import {Range} from 'react-range';
import css from './css.module.scss';

type propsType = {
    value: number
    disabled: boolean
    min: number
    max: number
    step: number
    setValue: (value: number) => void
}

const SuperRange = (props: propsType) => {

    function setValues(values: number[]) {
        props.setValue(values[0])
    }

    return (
        <div className={css.wrap}>
            <p className={css.number}>{props.value}</p>
            <Range step={props.step} min={props.min} max={props.max} values={[props.value]} onChange={(values) => setValues(values)} renderTrack={({props, children}) => (
                <div {...props} className={css.line}>
                    {children}
                </div>
                )}
                renderThumb={({ props }) => (
                    <div {...props} style={{...props.style, height: '20px', width: '20px', backgroundColor: '#0D6EFD', borderRadius: '50%'}}/>
                )}
            />
        </div>
    )
}

export default SuperRange;