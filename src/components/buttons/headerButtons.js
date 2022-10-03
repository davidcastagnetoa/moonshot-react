import React from 'react';

export const CopyBtn = props => {
    return (
        <div className={props.class}>
            <div className="far fa-copy"></div>
            <p>{props.innerHTML}</p>
        </div>
    );
};
