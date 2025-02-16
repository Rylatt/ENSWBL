Button.js

import React from "react"

const Button = (props) => {
    return (
        <button onClick={props.onclick} disabled={props.count === 0}>
            {props.text}
        </button>
    )
};

export default Button;