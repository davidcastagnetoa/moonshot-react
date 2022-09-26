import React from 'react';

// Functional Component

export const CopyBtn = props => {
    return (
        <div>
            <div className="far fa-copy"></div>
            <p>{props.innerHTML}</p>
        </div>
    );
};

// export const ToggleBtn = () => {
//     return (
//         <button class="buttons wrapperbtn day-night darkModeSwitch" id="tgl" title="Cambiar Colores">
//             <div id="tgl" className="fas fa-adjust"></div>
//         </button>
//     );
// };