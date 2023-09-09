import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import '../styles/HotelCard.css';
import calculateAvgRating from '../utils/avgRating';

const HotelCard = ({hotel}) => {

    const {_id, title, photo, city, price, featured, reviews} = hotel;

    const {totalRating, avgRating} = calculateAvgRating(reviews);

  return (
    <div className="hotel__card">
        <Card>
            <div className="hotel__img">
                <img src={photo} alt="hotel-img" />
                <span>Featured</span>
            </div>

            <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="hotel__location d-flex align-items-center gap-1">
                <i class="ri-map-pin-fill"></i> {city}
                </span>
                <span className="hotel__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> {avgRating == 0 ? null : avgRating}
                    {totalRating == 0 ? 'Not rated' : <span>({reviews.length})</span>}
                </span>
            </div>

            <h5 className="hotel__title">
                <Link to={`/hotels/${_id}`}>{title}</Link>
            </h5>
            <div className="card__bottom d-felx align-items-center justify-content-between mt-3">
                <h5>${price}<span>/night</span></h5>
                <button className="btn booking__btn">
                    <Link to={`/hotels/${_id}`}>Book Now</Link>
                </button>
            </div>
            </CardBody>
        </Card>
    </div>
  )
}

export default HotelCard;