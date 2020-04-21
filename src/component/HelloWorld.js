import React from 'react';
function HelloWorld(props){
    return(
        <div className="HelloWorld">
                <p>{props.text}</p>
        </div>
    )
}

export default HelloWorld;