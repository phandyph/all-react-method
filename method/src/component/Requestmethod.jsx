import { useState, useEffect } from 'react'
import Display from './display/Display'
import Add from './add/Add'
import './Requestmethod.css'

const Requestmethod = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    // console.log(loading);

    /**
     * Get all posts
     */
    const getPosts = () => {
        const corsForGet = {
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'applicatioin/json',
                'Access-Control-Allow-Origin': '*',
            }
        };

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
     * Add Data
     */
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const onAdd = () => {
        const corsForAdd = {
            method: 'POST',
            body: JSON.stringify({
               title: title,
               body: body,
            }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
        }

        fetch('https://jsonplaceholder.typicode.com/posts', corsForAdd)
            .then((res) => res.json())
            .then((post) => {
               setTitle('');
               setBody('');
               console.log('Data I have created: ',post);
            })
            .catch((err) => {
               console.log(err);
        });

        setIsShow(false)
    }

    /**
     * Hide and Show Form
     */
    const [isShow, setIsShow] = useState(false)
    const onShow = () => {
        setIsShow(true)
    }

    const onCancal = () => {
        setIsShow(false)
    }


    /**
     * Delete post by id
     * Request Method: OPTIONS (pre-flight with status 204)
     * Request Method: GET (status 200)
     * These two requests make us see id two times.
     */

    const onDelete = (id) => {
        const corsForDelete = {
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Content-Type': 'applicatioin/json',
                'Access-Control-Allow-Origin': '*',
            }
        };
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
            <h2 className='title' >ALL METHODS <span className='text-success'>GET</span> <span className='text-primary'>POST</span> <span className='text-danger'>DELETE</span> <span className='text-warning'>PUT</span> </h2>
            <Add
                title={title}
                body={body}
                setTitle={setTitle}
                setBody={setBody}
                onAdd={onAdd}
                isShow={isShow}
                onCancal={onCancal}
                onShow={onShow}
            />
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