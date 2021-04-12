import React, {useState} from 'react';
import Number from "./Number";
import Buttons from "./Buttons";



function MainContent() {
    const [counter,setCounter] =useState(0)

    return (
        <div className="mainContent">
            <Number counter={counter} />
            <Buttons counter={counter} setCounter={setCounter} />
        </div>
    );
}

export default MainContent;