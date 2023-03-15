import React from 'react';

function Fragment3(){
    const items = []
    return(
        // <React.Fragment>
        //     {
        //         items.map(item => (<React.Fragment key ={item.id}>
        //             <h1>Title</h1>
        //             <p>{item.title}</p>
        //             </React.Fragment>
        //             ))

        //     }
        //     <td> Mayank</td>
        // <td>Shamali</td>
        // </React.Fragment>


        <>
        <td> Mayank</td>
        <td>Shamali</td>
        </>
    )
}

export default Fragment3;