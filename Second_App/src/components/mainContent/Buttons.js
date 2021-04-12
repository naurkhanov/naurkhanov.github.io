import React from 'react';


function Buttons(props) {
    function plus(){
        props.setCounter(props.counter+3)
    }

    function minus(){
        props.setCounter(props.counter-2)
    }

    function reset(){
        props.setCounter(0);
    }

    return (
        <div className="mainButtons">
            <button className="buttonBlue" onClick={plus}>
                Увеличить
            </button>

            <button className="buttonOrange" onClick={minus} >
                Уменьшить
            </button>

            <button className="buttonGrey" onClick={reset} >
                Cбросить
            </button>

        </div>
    );
}

export default Buttons;