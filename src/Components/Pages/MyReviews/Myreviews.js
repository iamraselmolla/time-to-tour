import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/Usetitle';
import { AuthContext } from '../../UserContext/AuthProvicer';
import SingleReview from './SingleReview';
import Table from 'react-bootstrap/Table';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from '@tanstack/react-query';
const Myreviews = () => {

    const { user,logOut } = useContext(AuthContext);
    useTitle('My Reviews');
    const url = `https://service-server-beryl.vercel.app/my-review?email=${user?.email}`;
    const {data : activity = [], isLoading} = useQuery({
        queryKey: ['activity', user?.email],
        queryFn: async () => {
            const res =  await fetch(url,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('tour-token')}`
                }
            });
            const activity = await res.json();
            return activity;
        }
    });
    if(isLoading){
        return <p>Loading ....</p>
    }
    const deleteComment = (id) => {
        if (window.confirm('Are you want to delete this comment')) {
            fetch(`https://service-server-beryl.vercel.app/post-review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('tour-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                         toast.success('Comment deleted', {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                })
        }
    }
    return (
        <section className="container py-3">
            <div className="row">
                <h1 className="fw-bolder text-center">
                    Total Activity {activity?.length}
                </h1>
            </div>
           {activity?.length >0 ? <div className="row">
                <div className="col">
                    <Table striped bordered hover variant="dark">

                        <thead>
                            <tr>
                                <th></th>
                                <th>Service Title</th>
                                <th>Service Thumbnail</th>
                                <th>Service Price</th>
                                <th>Comment</th>
                                <th>Commented Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activity?.map((single, i) => <SingleReview key={single?._id} deleteComment={deleteComment} indexNumber={i} activityData={single}></SingleReview>)}
                        </tbody>
                    </Table>
                </div>
            </div> : <h2 className='text-white bg-danger text-center py-3 px-2 rounded'>You have no activity to show </h2>}
        </section>
    );
};

export default Myreviews;