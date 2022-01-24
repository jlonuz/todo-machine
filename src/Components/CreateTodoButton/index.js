import React from 'react';
import './style.css';

function CreateTodoButton(props) {
    const onClickButton = (msg) => {
        alert(msg);
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton('clic')}
        >
            +
        </button>
    )
}

export { CreateTodoButton };