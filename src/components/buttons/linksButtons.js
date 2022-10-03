import React from 'react';

export const LinkBtn = props => {
    return (
        <div className={props.class}>
            <div id={props.id}></div>
            <p>{props.innerHTML}</p>
        </div>
    );
};