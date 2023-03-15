import React, { Component } from 'react';

const Counterhoc=(WrappedComponent,Incrementnumber)=>{
    class Counterhoc extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }

        }

        incrementCounter=()=>{
            this.setState(prevState =>{
                return {count : prevState.count+Incrementnumber}
            })
        }
render(){
    return(

        <WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter}  {...this.props}      />
    )
}
        }
        return Counterhoc;
    }

    export default Counterhoc;
