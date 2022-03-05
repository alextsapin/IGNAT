import React from 'react';

type propsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: propsType) {
    return (
        <div className="message">
            <img className="message__avatar" src={props.avatar}/>
            <div className="message__user">
                <p className="message__name">{props.name}</p>
                <div className="message__text">
                    <p>{props.message}</p>
                    <p className="message__time">{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message