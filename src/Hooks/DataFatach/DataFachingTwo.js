import React,{useReducer,useEffect} from 'react'
import axios from 'axios'



function DataFachingTwo() {
    const initalState = {
        loading:true,
        error:'',
        post:{}
    }
    const reducer = (state,action)=>{
        switch(action.type){
            case 'fach_success':
                return{
                    loading:false,
                    post: action.payloda,
                    error: ''
                }
            case 'fach_error':
                return{
                    loading:false,
                    post: {},
                    error: 'Something is wrong'
                }
            default:
                return state
        }
    }
    const [state,dispatch] = useReducer(reducer,initalState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            dispatch({type:"fach_success",payloda:res.data})
        })
        .catch(err=>{
            dispatch({type:"fach_error"})
        })
    },[]) 

    return (
        <div>
             {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFachingTwo
