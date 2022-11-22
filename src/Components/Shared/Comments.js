import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/AuthProvicer';


const Comments = ({ commentData, deleteComment }) => {
    const { user } = useContext(AuthContext)
    const { author, email, _id, comments, img } = commentData;
   
    return (
        <div className="d-flex p-2 rounded border my-4 position-relative">
            {user?.email === email && <div className="position-absolute" style={{ right: '2%' }}>
               <Link to={`/edit-comment/${_id}`}> <FaRegEdit style={{ cursor: 'pointer' }} className='fs-4 me-2'></FaRegEdit></Link>
                <FaTrashAlt onClick={() => deleteComment(_id)} style={{ cursor: 'pointer' }} className='fs-4'></FaTrashAlt>
            </div>}
            <div className='me-3'>
                <img src={img} width="50px" className='rounded-circle' height="50px" alt="" />
                <p className="fw-bolder mb-0">{author}</p>
            </div>
            <div className=''>
                {comments}
            </div>
           
        </div>
    );
};

export default Comments;