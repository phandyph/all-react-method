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

    /**
     * Delete post by id
     * Request Method: OPTIONS (pre-flight with status 204)
     * Request Method: GET (status 200)
     * These two requests make us see id two times.
     */

    const corsForDelete = {
        mode: 'cors',
        headers: {
            'Content-Type': 'applicatioin/json',
            'Access-Control-Allow-Origin': '*',
            Method: 'DELETE'
        }
    };
    const onDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, corsForDelete)
        .then(()=>{
            getPosts();
            console.log(`This id '${id}' have been deleted`)
        })
        .catch((error)=>{
            console.log(error)
        })
    }


    useEffect(()=>{
        getPosts();
    },[])

    return (
        <div className='whole-container'>
            <h2 className='title' >All methods, they are GET, POST, DELETE and PUT</h2>
            <div className='cards-container' >
                <Display 
                    posts={posts}
                    onDelete={onDelete}
                />
            </div>
        </div>
    )
}

export default Requestmethod