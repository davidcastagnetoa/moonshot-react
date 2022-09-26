import React from 'react';

// Functional Component

export const LinkBtn = props => {
    return (
        <div class={props.class}>
            <div id={props.id}></div>
            <p>{props.innerHTML}</p>
        </div>
    );
};