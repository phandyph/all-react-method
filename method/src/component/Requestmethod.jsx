import { useState, useEffect } from 'react'
import Display from './display/Display'
import './Requestmethod.css'

const Requestmethod = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log(loading);

    /**
     * Get all posts
     */
    const corsForGet = {
        mode: 'cors',
        headers: {
            'Content-Type': 'applicatioin/json',
            'Access-Control-Allow-Origin': '*',
            Method: 'GET'
        }
    };
    
    const getPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts',corsForGet)
        .then((response)=> {
            return response.json();
        })
        .then((posts)=>{
            setLoading(true);
            setPosts(posts);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    console.log('Here is data use fetch: ', posts)


    useEffect(()=>{
        getPosts();
    },[])

    return (
        <div className='whole-container'>
            <h2 className='title' >All methods, they are GET, POST, DELETE and PUT</h2>
            <div className='cards-container' >
                <Display 
                    posts={posts}
                />
            </div>
        </div>
    )
}

export default Requestmethod