import {Modal, Button} from 'react-bootstrap';

const Edit = ({
    isEditForm,
    onCancalEditForm,
    onShowEditForm,
    onEdit
}) => {
    return (
        <div >
            <Button onClick={()=>onShowEditForm()} className='btn bg-warning m-1 text-white' >
                Edit
            </Button>

            <Modal show={isEditForm}
            className='m-5'>
                <Modal.Body>
                    <input 
                        type="text"
                        name='title'
                        placeholder='Title'
                       
                    />

                    <input 
                        type="text" 
                        className='form-control mt-2'
                        name='body'
                       
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={()=> onCancalEditForm()} variant="danger">
                        Cancal
                    </Button>
                    <Button type='submit' onClick={()=>onEdit()}  variant="success">
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Edit