import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useTitle from '../hooks/Usetitle';

const EditComment = () => {
    const { comments, _id } = useLoaderData(); 
    useTitle('Edit comment')
    const handleUpdate = (e) => {
        e.preventDefault();
        const updateComment = e.target.editedcomments.value;
        const updatedInfo = {updateComment}
        fetch(`https://service-server-beryl.vercel.app/edit-comment/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data?.modifiedCount){
                toast.success('Updated comment successfully',{
                    position: toast.POSITION.TOP_CENTER
                });
            }
        })
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="bg-black text-white px-3 py-5 rounded">
                        <h2 className="tex-white fw-bolder">
                            Edit comment
                        </h2>
                        <Form onSubmit={handleUpdate}>
                            <Form.Group className="mb-3" controlId="formBasicEmail23233">
                                <Form.Control name="editedcomments" defaultValue={comments} as="textarea" />
                            </Form.Group>
                            <Button className='w-100 bg-white fs-5 fw-bolder text-black py-2 ' type="submit">
                                Edit comment
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditComment;