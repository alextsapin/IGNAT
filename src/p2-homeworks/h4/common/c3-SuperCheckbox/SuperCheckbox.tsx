import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './SuperCheckbox.module.css';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, 
        onChangeChecked,
        className, 
        spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {

    const [checked, setChecked] = React.useState(false)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.target.checked)
    }

    const finalInputClassName = `form-check-input mx-2 ${s.checkbox} ${className ? className : ''}`

    return (
        <label className="form-check-label">
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}
                checked={checked}
                {...restProps}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    )
}

export default SuperCheckbox;