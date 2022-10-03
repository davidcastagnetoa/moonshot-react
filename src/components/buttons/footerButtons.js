import React from 'react';

export const FooterBtn = props => {
    return (
        <div>
            <div className="fas fa-home"></div>
            <p>{props.innerHTML}</p>
        </div>
    );
};
