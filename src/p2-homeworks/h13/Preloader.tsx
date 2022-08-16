import React from 'react';

const Preloader = () => {
    return (
        <div className="spinner-border text-light spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Preloader;