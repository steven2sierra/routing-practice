import React from 'react';

const Color = props => {
    // style div
    const styleDiv = {
        backgroundColor : props.background,
        color: props.color
    }
    return(
        <div>
            <p style={styleDiv} >The word is {props.hello} </p>
        </div>
    );
}

export default Color;