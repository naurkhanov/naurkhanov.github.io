import React, {useState} from 'react';

function Number(props) {

    return (
        <div className="numberMain">
            {props.counter}
        </div>
    );
}

export default Number;