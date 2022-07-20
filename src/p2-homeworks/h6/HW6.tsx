import React, {useState} from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {restoreState, saveState} from './localStorage/localStorage';

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value', value))
    }

    return (
        <div>
            <h2>Home work № 6</h2>
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : '🖉 Enter text...'}}
                />
            </div>
            <SuperButton className='mt-1 me-2' onClick={save}>save</SuperButton>
            <SuperButton className='mt-1' onClick={restore}>restore</SuperButton>
            <hr/>
        </div>
    )
}

export default HW6