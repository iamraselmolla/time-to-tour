import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../UserContext/AuthProvicer';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';


const SingleReview = ({ activityData, deleteComment, indexNumber }) => {
    const { serviceItems } = useContext(AuthContext)
    const { _id, packageId, comments, insertTime } = activityData;
    const findServices = serviceItems?.find(s => s._id === packageId);



    return (

        <tr>
            <td>
                {indexNumber + 1}
            </td>
            <td>
                <Link className='text-decoration-none fs-4 fw-bolder' to={`/services/${packageId}`}>{findServices?.name}</Link>

            </td>
            <td>
                <PhotoProvider>
                    <PhotoView src={findServices?.img}>
                        <img width="80px" src={findServices?.img} alt="" className='mt-2 rounded' />
                    </PhotoView>
                </PhotoProvider>
            </td>
            <td className='ps-3'>

                <p className="fw-bolder mb-0 fs-4">
                    {findServices?.price}
                </p>

            </td>
            <td>{comments}</td>
            <td>{Date(insertTime).split(' ').slice(0, 5).join(' ')}</td>
            <td>
                <Link to={`/edit-comment/${_id}`}> <FaRegEdit style={{ cursor: 'pointer' }} className='fs-4 me-2'></FaRegEdit></Link>
                <FaTrashAlt onClick={() => deleteComment(_id)} style={{ cursor: 'pointer' }} className='fs-4'></FaTrashAlt>

            </td>
        </tr>
    );
};

export default SingleReview;