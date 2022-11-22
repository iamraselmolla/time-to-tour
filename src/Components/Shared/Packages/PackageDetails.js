import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { FaBinoculars, FaStar, FaStarHalf, FaHotel, FaBus, FaLuggageCart, FaCalendar } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../UserContext/AuthProvicer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Comments from '../Comments';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/Usetitle';



const PackageDetails = () => {
    const { user } = useContext(AuthContext)
    const packageData = useLoaderData();
    const [allCommetns, setComments] = useState([])
    const [reload, setReload] = useState(false)
    const { _id, name, img, description, price, ratings } = packageData;
    useTitle(name)
    const navigate = useNavigate()
    const location = useLocation();


    useEffect(() => {
        fetch(`https://service-server-beryl.vercel.app/post-review/${_id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
            .catch(err => console.log(err.message))
    }, [reload])
    const SubmitReview = (e) => {
        e.preventDefault();
        const author = e.target.reviewname.value;
        const img = user?.photoURL || 'blank.png';
        const packageId = _id;
        const email = user?.email;
        const comments = e.target.comments.value;
        const insertTime = new Date().getTime();
        const reviewInfo = { packageId, author, email, img, comments, insertTime };
     
        fetch('https://service-server-beryl.vercel.app/post-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    e.target.reset()
                    toast.success('Review shared successfully', {
                        position: toast.POSITION.TOP_CENTER
                    });
                    setReload(!reload)
                }
            })
    }
    const deleteComment = (id) => {
        if (window.confirm('Are you want to delete this comment')) {
            fetch(`https://service-server-beryl.vercel.app/post-review/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = allCommetns.filter(s => s._id !== id);
                        setComments(remaining);
                        toast.success('Comment deleted', {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                })
        }
    }
    const handleNavigate = () => {
        if (!user?.email) {
            navigate('/login', {state: { from: location },  replace: false});
        }
    }


    return (
        <section className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h2 className="fw-bolder text-white bg-black px-2 py-3 rounded mb-3 fs-1">
                            {name}
                        </h2>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" className='img-fluid' />
                            </PhotoView>
                        </PhotoProvider>

                        <div className="d-flex mt-3 gap-4">
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaBinoculars></FaBinoculars>
                            </span>
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaHotel></FaHotel>
                            </span>
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaBus></FaBus>
                            </span>
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaLuggageCart></FaLuggageCart>
                            </span>
                            <span style={{ width: '60px', height: '60px' }} className='justify-content-center d-flex align-items-center text-center border border-2 rounded'>
                                <FaCalendar></FaCalendar>
                            </span>
                        </div>
                        <div className="tour-details mt-2">
                            <p> {description}</p>
                        </div>
                        <div className="review-and-see-reviews mt-3">
                            <div className="reviews">
                                <h3 className="fw-bolder">
                                    This Service has {allCommetns.length >= 2 ? allCommetns.length + ' reviews' : allCommetns.length + ' review'}
                                </h3>
                                {allCommetns.length > 0 ?
                                    allCommetns?.map(singleComments => <Comments key={singleComments._id} deleteComment={deleteComment} commentData={singleComments}></Comments>) : ''}
                            </div>
                            {user && <div className="add-review">
                                <Form onSubmit={SubmitReview}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="formBasicEmail22">
                                                <Form.Label>Full name</Form.Label>
                                                <Form.Control defaultValue={user?.displayName} name="reviewname" type="text" placeholder="Enter Name" />
                                            </Form.Group>
                                        </div>
                                        <div className="col-md-6">
                                            <Form.Group className="mb-3" controlId="formBasicEmail22">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control name="reviewemail" defaultValue={user?.email} readOnly type="email" />
                                            </Form.Group>
                                        </div>
                                        <Form.Group className="mb-3" controlId="formBasicEmail23233">
                                            <Form.Label>Comments</Form.Label>
                                            <Form.Control name="comments" required placeholder='Write your comments here' as="textarea" />
                                        </Form.Group>
                                    </div>
                                    <Button className='w-100 bg-black fs-5 fw-bolder text-white py-3 ' type="submit">
                                        Share Review
                                    </Button>
                                </Form>
                            </div>}
                            {!user && <h4 className='fw-bolder'>You are not logged in. Please <buttn className="btn-link text-primary" style={{cursor: 'pointer'}} onClick={handleNavigate}>Login</buttn> first to leave review</h4>}
                        </div>
                    </div>
                    <div className="col-md-4 text-white rounded  bg-black">
                        <div className="position-sticky py-4 top-0">
                            <img src={img} className="img-fluid" alt="" />
                            <h4 className="fw-bolder mt-2">
                                {name}
                            </h4>
                            <h5 className="mt-3">
                                Price: {price}
                            </h5>
                            <div className="review"> Review :
                                <FaStar className='text-danger ms-1'></FaStar>
                                <FaStar className='text-danger'></FaStar>
                                <FaStar className='text-danger'></FaStar>
                                <FaStar className='text-danger'></FaStar>
                                <FaStarHalf className='text-danger me-1'></FaStarHalf>
                                {ratings}
                            </div>
                            <div className="checkout-form mt-4">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>User Name</Form.Label>
                                        <Form.Control defaultValue={user?.displayName} type="text" placeholder="User Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Button className='bg-white fw-bolder text-black w-100' variant="primary" type="submit">
                                        Order Now
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageDetails;