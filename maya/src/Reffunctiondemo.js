import React from 'react';
// function Functionrefdemo(){
//     return(
//         <div>
//             <input type="text"/>
//         </div>
//     )
// }


const Reffunctiondemo=React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
})

export default Reffunctiondemo;