import React from "react";

const Display = props => {
    return (
        <div>
            {props.minZero}{props.timeInMinutes}:
            {props.secZero}{props.timeInSeconds}:
            {props.deciSecZero}{props.timeInDeciSeconds}
        </div>
    )
};

export default Display;