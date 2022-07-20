import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import css from './SuperRadio.module.scss'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    name: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({type, name, options, value, onChange, onChangeOption, ...restProps}) => {
    //console.log(value)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        //onChange && onChange(e)
        console.log(e.currentTarget.value)
        onChangeOption && onChangeOption((e.currentTarget.value))
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                type='radio'
                className={css.input}
                name={name}
                value={o}
                checked={o === value}
                onChange={e => onChangeCallback(e)}
                {...restProps}
            />
            {o}
        </label>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
