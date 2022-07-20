import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    value: any
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({options, value, onChange, onChangeOption,...restProps}) => {

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
        <select onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
