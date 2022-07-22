import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import css from './css.module.scss'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [stringDate, setStringDate] = useState('')
    const [show, setShow] = useState(false)
    const [stringTime, setStringTime] = useState('')

    const time = {
        'hours': '',
        'minutes': '',
        'seconds': ''
    }

    const date = {
        'days': '',
        'month': '',
        'year': ''
    }
    
    const stop = () => {
        clearInterval(timerId)
    }

    const start = () => {
        
        const id: number = window.setInterval(() => {
            const moment = new Date()

            time.hours = moment.getHours() < 10 ? '0' + String(moment.getHours()) : String(moment.getHours())
            time.minutes = moment.getMinutes() < 10 ? '0' + String(moment.getMinutes()) : String(moment.getMinutes())
            time.seconds = moment.getSeconds() < 10 ? '0' + String(moment.getSeconds()) : String(moment.getSeconds())
            setStringTime(time.hours + ':' + time.minutes + ':' + time.seconds)

            date.days = moment.getDate() < 10 ? '0' + String(moment.getDate()) : String(moment.getDate())
            date.month = moment.getMonth() < 10 ? '0' + String(moment.getMonth() + 1) : String(moment.getMonth() + 1)
            date.year = moment.getFullYear() < 10 ? '0' + String(moment.getFullYear()) : String(moment.getFullYear())
            setStringDate(date.days + ':' + date.month + ':' + date.year)
        }, 1000)

        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    
    const onMouseLeave = () => {
        setShow(false)
    }

    return (
        <div className={css.block}>
            <div className={css.time} onMouseEnter={onMouseEnter}onMouseLeave={onMouseLeave}>
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <div>
                <SuperButton className="me-2" onClick={start}>start</SuperButton>
                <SuperButton onClick={stop}>stop</SuperButton>
            </div>
        </div>
    )
}

export default Clock