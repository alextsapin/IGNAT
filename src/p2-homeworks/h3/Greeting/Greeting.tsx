import React from 'react';
import css from './Greeting.module.scss';

type GreetingPropsType = {
    name: string
    setNameCallback: (value: string) => void
    addUser: () => void
    error: string
    totalUsers: number
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers} ) => {
    return (
        <div className={css.box}>
            <div>
                <input value={name} onChange={e => setNameCallback(e.currentTarget.value)} className="form-control"/>
                {error && <p className="alert alert-danger py-2 mt-2">{error}</p>}
            </div>
            <button className="btn btn-primary ms-3" onClick={addUser}>add</button>
            <span className="ms-3">{totalUsers}</span>
        </div>
    )
}

export default Greeting;