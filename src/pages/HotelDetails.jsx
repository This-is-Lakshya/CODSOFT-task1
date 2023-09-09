import React,{useEffect, useRef, useState, useContext} from 'react';
import '../styles/TourDetails.css';
import {Container, Row, Col, Form, ListGroup} from 'reactstrap';
import {useParams} from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.svg';
import Booking from '../components/Booking';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config.js';
import {AuthContext} from '../context/AuthContext.js';

const HotelDetails = () => {

  const {id} = useParams();
  const reviewMsgRef = useRef('');
  const [hotelRating, setHotelRating] = useState(null);
  const {user} = useContext(AuthContext);

  // fetch data from database
  const {data:hotel, loading, error} = useFetch(`${BASE_URL}/hotels/${id}`)

  const {photo, title, desc, price, reviews, city, address, maxGroupSize} = hotel;
  const {totalRating, avgRating} = calculateAvgRating(reviews);

  // format data
  const options = {day:'numeric', month:'long', year:'numeric'};

  // submit request to server
  const submitHandler = async(e) =>{
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    try {
      if(!user || user==undefined || user==null){
        alert('Please Sign-in')
      }
      const reviewObj = {
        username:user?.username,
        reviewText,
        rating:hotelRating
      }

      const res = await fetch(`${BASE_URL}/hotelReview/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      });

      const result = await res.json();
      if(!res.ok){
        return alert(result.message);
      }

      alert(result.message)

    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [hotel]);

  return (
    <section>
      <Container>
        {
          loading && <h4 className='text-center pt-5'>Loading .....</h4>
        }
        {
          error && <h4 className='text-center pt-5'>{error}</h4>
        }
        {
          !loading && !error && <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" />

              <div className="tour__info">
                <h2>{title}</h2>

                <div className='d-flex align-items-center gap-5'>
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill" style={{'color':'#000E42'}}></i> {avgRating == 0 ? null : avgRating}
                    {totalRating == 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                  </span>

                  <span>
                    <i class="ri-map-pin-fill"></i> {address}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span><i class="ri-map-pin-line"></i> {city}</span>
                  <span><i class="ri-money-dollar-circle-line"></i> ${price}/person </span>
                  <span><i class="ri-group-line"></i> {maxGroupSize} people</span> 
                </div>
                <h5>Description</h5>
                <p>{desc}</p>
              </div>

              {/* ________ tour reviews ________ */}
              <div className="tour__reviews mt-4">
                <h4>Reviews ({reviews?.length} reviews)</h4>
                <Form onSubmit={submitHandler}>
                  <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                    <span onClick={()=> setHotelRating(1)}>1<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setHotelRating(2)}>2<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setHotelRating(3)}>3<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setHotelRating(4)}>4<i class="ri-star-s-fill"></i></span>
                    <span onClick={()=> setHotelRating(5)}>5<i class="ri-star-s-fill"></i></span>
                  </div>

                  <div className='review__input'>
                    <input type="text" ref={reviewMsgRef} placeholder='share your experience' required />
                    <button className="btn primary__btn text-white" type='submit'>Submit</button>
                  </div>
                </Form>

              {/* User-Review */}
                <ListGroup className='user__reviews'>
                  {
                    reviews?.map(review =>(
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.username}</h5>
                              <p>
                                {
                                  new Date('01-18-2023').toLocaleDateString('en-US', options)
                                }
                              </p>
                            </div>
                            <span className='d-flex align-items-center'>
                              {review.rating} <i class="ri-star-s-fill"></i>
                            </span>
                          </div>

                          <h6>{review.reviewText}</h6>
                        </div>
                      </div>
                    ))
                  }
                </ListGroup>
              </div>
              {/* ______________________________ */}

            </div>
          </Col>

          <Col lg='4'>
            <Booking tour={hotel} avgRating={avgRating} />
          </Col>
        </Row>
        }
      </Container>
    </section>
  )
}

export default HotelDetails;