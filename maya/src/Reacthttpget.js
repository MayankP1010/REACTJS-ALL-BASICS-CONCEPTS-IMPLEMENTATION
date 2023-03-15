import React,{Component} from 'react';
import axios from'axios';

class Reaxcthttpget extends Component{

    constructor(){
        super()
        this.state={
            posts : [],
            errormsg:''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log(Response)
            this.setState({posts : Response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errormsg : 'Error in retriving data'})
        })

    }
    render(){
        const{posts,errormsg}=this.state
        return(
            <div>
                List of post
                {
                    posts.length ?
                    posts.map(post=><div key={post.id}>{post.title}</div>):
                    null
                }
                {errormsg ? <div>{errormsg}</div>:null}
            </div>

        )
    }
}

export default Reaxcthttpget;