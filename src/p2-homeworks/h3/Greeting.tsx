import React from 'react'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers} ) => {
    //const inputClass = s.error // need to fix with (?:)

    return (
        <div className="row g-3">
            <div className="col">
                <input value={name} onChange={setNameCallback} className="form-control"/>
                <p className="alert alert-danger py-2 mt-2">{error}88</p>
            </div>
            <div className="col">
                <button className="btn btn-primary" onClick={addUser}>add</button>
                <span className="alert alert-secondary py-2 ms-3">{totalUsers}</span>
            </div>
        </div>
    )
}

export default Greeting