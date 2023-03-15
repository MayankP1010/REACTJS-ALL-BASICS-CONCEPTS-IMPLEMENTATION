import React, { Component} from 'react';

function Mop2C(props){                                     /*{Methods as props child} */
return(
    <div>
        <button onClick={props.childhandler}>Click</button>
    </div>
)
}

export default Mop2C;