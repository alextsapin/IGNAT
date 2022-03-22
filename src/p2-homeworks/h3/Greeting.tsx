import React from 'react'

type GreetingPropsType = {
    name: string
    setNameCallback: (value: string) => void
    addUser: any
    error: any
    totalUsers: any
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers} ) => {
    //const inputClass = s.error // need to fix with (?:)

    return (
        <div className="row g-3">
            <div className="col">
                <input value={name} onChange={e => setNameCallback(e.currentTarget.value)} className="form-control"/>
                {error && <p className="alert alert-danger py-2 mt-2">{error}</p>}
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={addUser}>add</button>
                <span className="alert alert-secondary py-2 ms-3">{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting