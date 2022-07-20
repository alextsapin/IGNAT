import React, {DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes, useState} from 'react'
import SuperInputText from '../../../h4/common/c1-SuperInputText/SuperInputText';
import css from './SuperEditableSpan.module.scss';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperEditableSpanType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: string
    spanClassName?: string
    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperEditableSpan: React.FC<SuperEditableSpanType> = ({autoFocus, onBlur, onEnter, spanProps, ...restProps}) => {

    const [editMode, setEditMode] = useState(false)
    const {children, onDoubleClick, className, ...restSpanProps} = spanProps || {}

    const onEnterCallback = () => {
        onEnter && onEnter()
        setEditMode(false)
    }

    const onBlurCallback = (e: React.FocusEvent<HTMLInputElement>) => {
        setEditMode(false)
        onBlur && onBlur(e)
    }

    const onDoubleClickHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        setEditMode(true)
        onDoubleClick && onDoubleClick(e)
    }

    const spanClassName = `${css.span} ${className}`

    return (
        <>
            {editMode
                ? 
                    <SuperInputText
                        autoFocus // пропсу с булевым значением не обязательно указывать true
                        onBlur={onBlurCallback}
                        onEnter={onEnterCallback}
                        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
                    />
                : 
                    <span
                        onDoubleClick={onDoubleClickHandler}
                        className={spanClassName}
                        {...restSpanProps}
                    >
                        {/*если нет захардкодженного текста для спана, то значение инпута*/}
                        {children || restProps.value}
                    </span>
                
            }
        </>
    )
}

export default SuperEditableSpan