import React,{Component} from 'react';

class Conditionrender extends Component{
    constructor(){
        super()
        this.state={
            islogin:false
        }
    }

    render(){
                                                // {Circuit rendering}

         return this.state.islogin && <div>Hello Mayank</div>
        

                                                // {ternary rendering}

        // return(
        //     this.state.islogin ?
        //     <div>Hello Mayank</div>:
        //     <div>Hello Shamali</div>
        // )
        

                                                 // {element rendering}

        // let message
        // if(this.state.islogin){
        //     message=<div>Hello Mayank</div>
        // }else{
        //     message=<div>Hello Shamali</div>
        // }
        // return <div>{message}</div>

                                                    // {if-else rendering}

        // if(this.state.islogin){
        //     return(
        //         <div>
        //             Hello Shamali
        //         </div>
        //     )
        // }else{
        //     return(
        //         <div>
        //             Hello Mayank
        //         </div>
        //     )
        // }
    }
}

export default Conditionrender;