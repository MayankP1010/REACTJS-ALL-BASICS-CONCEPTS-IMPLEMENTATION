import React from 'react';

function Listrender() {
    const names = ['Mayank' , 'Shamali' , 'Manthan']
    const nameList = names.map(name => <h2>{name}</h2>)
    return <div>{nameList}</div>
       
}

export default Listrender;