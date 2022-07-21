import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';
import css from './SuperSelect.module.scss';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    value: any
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({options, value, onChange, onChangeOption,...restProps}) => {

    console.log(value)

    let mappedOptions: any[] = options ? options.map((item, index) => {
        return (
            <option 
                key={index}
                value={item}

            >
            {item}
            </option>
        )})
        : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} value={value} className={css.select}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
