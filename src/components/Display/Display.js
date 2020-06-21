import React from "react";

import "./styles.css"

const Display = props => {
    return (
        <div className="display">
            {props.minZero}{props.timeInMinutes}:
            {props.secZero}{props.timeInSeconds}:
            {props.deciSecZero}{props.timeInDeciSeconds}
        </div>
    )
};

export default Display;