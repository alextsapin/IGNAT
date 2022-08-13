import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = ({red, className,...restProps}) => {    
    const finalClassName = `${red ? 'btn btn-danger' : 'btn btn-primary'} ${className}`

    return (
        <button
            className={'btn btn-primary ' + finalClassName}
            // Отдаём кнопке остальные пропсы, если они есть (children внутри).
            {...restProps} 
        />
    )
}

export default SuperButton
