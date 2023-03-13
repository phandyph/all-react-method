import { useState } from 'react';
import {Modal, Button} from 'react-bootstrap';

import './Add.css'
const Add = ({
    title,
    setTitle,
    body,
    setBody,
    onAdd
}) => {
    // Code below to hide or show form.
    const [isShow, setIsShow] = useState(false)
    const onShow = () => {
        setIsShow(true)
    }

    const onCancel = () => {
        setIsShow(false)
    }

    return (
        <div className='add'>
            <button type="button" variant='success' onClick={onShow} className="btn add-btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            CREATE
            </button>

            <Modal show={isShow} className='m-5'>
                <Modal.Body>
                    <input 
                        type="text"
                        className='form-control'
                        placeholder='Title'
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />

                    <input 
                        type="text" 
                        className='form-control mt-2'
                        placeholder='Description'
                        value={body}
                        onChange={(e)=>setBody(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button style={{}} variant="danger" onClick={onCancel}>
                        Cancal
                    </Button>
                    <Button type='submit' variant="success" onClick={()=>onAdd()}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            
        </div>
    )
}
export default Add;