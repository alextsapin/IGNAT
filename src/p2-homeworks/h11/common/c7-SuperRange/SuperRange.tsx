import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import css from './css.module.scss';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
};

const SuperRange: React.FC<SuperRangePropsType> = ({type, value, onChange, onChangeRange, className, ...restProps}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${css.range} ${className ? className : ''}`

    return (
        <div className={css.box}>
            <p className={css.value}>{value}</p>
            <input
                type={'range'}
                value={value}
                onChange={onChangeCallback}
                className={finalRangeClassName}
                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
        </div>
    )
}

export default SuperRange
