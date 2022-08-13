import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import css from './SuperRadio.module.scss'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
    name: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({type, name, options, value, onChange, onChangeOption, ...restProps}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption((e.currentTarget.value))
    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label className={css.label} key={name + '-' + i}>
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
        <div className={css.wrap}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
