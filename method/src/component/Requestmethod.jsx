import { useState, useEffect } from 'react'
import Display from './display/Display'
import Form from './form/Form'
import './Requestmethod.css'

const Requestmethod = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showForm, setShowForm] = useState(false);

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
     * 
     * @param {*} e 
     * @param {*} type 
     * This function response on get data from input
     * and get data to display.
     */
    const [post, setPost] = useState({})
    const onInputChange = (e, type) => {
        const { value } = e.target;
        // [type] type in [] mean we can write in it.
        setPost({...post, [type]: value });
    }

    /**
     * Add Data
     */
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

  

    const onAdd = () => {
        const corsForAdd = {
            method: 'POST',
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
               'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
               title: post.title,
               body: post.body,
            }),
        }

        fetch("https://jsonplaceholder.typicode.com/posts", corsForAdd)
            .then((res) => res.json())
            .then((post) => {
            //    setTitle("");
            //    setBody("");
            //    console.log('Data I have created: ',post);
                setPost({...post})
                console.log('Here is data just add: ',post);
            })
            .catch((err) => {
               console.log(err);
        });

        setShowForm(false);
        
    }

    

    const onEdit = (id) => {
        setShowForm(true);
        const corsForEdit = {
            mode: 'cors',
            method: 'PUT',
            //It needs object because we change and then we add it at that place.
            body: JSON.stringify({ 
                title: post.title,
                body: post.body,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
        };
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, corsForEdit)
        .then((res)=>{
            return res.json();
        })
        .then((post)=>{
            // if (post.id === id) {
            //     setPost({ title:post.title, body:post.body})
            // }else{
            //     setPost({...post})
            // }

            posts.forEach((eachP)=>{
                if (eachP.id === id){
                    console.log(eachP)
                    setPost({...post})
                }else {
                    setPost({...post})
                }
            })
        })
        .catch((error)=>{
            console.log(error)
        })
        // onCancalEditForm(false)
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

    const onButtonCreate = () => {
        setShowForm(true);
    }

    const onButtonCancal = () => {
        setShowForm(false);
    }


    useEffect(()=>{
        getPosts();
    },[])

    return (
        <div className='whole-container'>
            <h2 className='title' >ALL METHODS <span className='text-success'>GET</span> <span className='text-primary'>POST</span> <span className='text-danger'>DELETE</span> <span className='text-warning'>PUT</span> </h2>
        

            <div>
                <button onClick={()=>onButtonCreate()} className="btn add-btn btn-primary">CREATE</button>
            </div>
            
            <div className='screen-display'>
                <div className='cards-container' >
                    <Display
                        posts={posts}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                </div>
                <Form
                    showForm={showForm}
                    onAdd={onAdd}
                    title={title}
                    body={body}
                    setTitle={setTitle}
                    setBody={setBody}
                    onButtonCancal={onButtonCancal}
                    post={post}
                    setPost={setPost}
                    onInputChange={onInputChange}
                />
            </div>
        </div> 
    )
}

export default Requestmethod