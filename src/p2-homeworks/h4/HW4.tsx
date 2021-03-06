import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import css from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState('')
    const error = text ? '' : 'error'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }


    return (
        <div>
            <h2>Home work № 4</h2>

            <div className={css.column}>
                <div className={css.box}>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}
                        // spanClassName={s.testSpanError}
                    />

                    <br/>

                    <SuperInputText className={css.blue}/>
                </div>


                <div className={css.box}>
                    <SuperButton>Default</SuperButton>
                    <br/>
                    <SuperButton red onClick={showAlert}>Delete</SuperButton>
                    <br/>
                    <SuperButton disabled>Disabled</SuperButton>
                </div>

                {/*----------------------------------------------------*/}

                <div className={css.box}>
                    <SuperCheckbox>some text</SuperCheckbox>
                </div>
            </div>

            <hr/>            
        </div>
    )
}

export default HW4
