import React from 'react';


const Thing = props => {

    if(isNaN(props.thing) == true) {
        return(
            <div>
                <p>This word is: {props.thing}</p>
            </div>
        );
    }
    if(isNaN(props.thing) == false) {
        return(
            <div>
                <p>The number is: {props.thing} </p>
            </div>
        );
    }
}

export default Thing;