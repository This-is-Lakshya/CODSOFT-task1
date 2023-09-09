import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Subtitle from '../shared/Subtitle';
import '../styles/Home.css';
import beachResort from '../assets/images/beach-resort.jpg';
import foreignCity from '../assets/images/foreign-city.jpg';
import nightCity from '../assets/images/night-city.jpg';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/FeaturedTourList';
import FeaturedHotelList from '../components/FeaturedHotelList';
import {Link} from 'react-router-dom';
import travelExperience from '../assets/images/travel_experience.svg';

const Home = () => {
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
              </div>
              <h1>Travelling opens the door of creating <span className="highlight">memories</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sequi ipsum inventore, voluptates veritatis atque rem magni sint facere delectus provident! Ducimus voluptatibus nesciunt delectus ratione ad. Dignissimos, dolorum!</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
              <img src={beachResort} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <img src={nightCity} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box main__img mt-5">
              <img src={foreignCity} alt="" />
            </div>
          </Col>

          <SearchBar />

        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve?</h5>
            <h2 className="services__title">We Offer The Best Services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2 className="featured__tour-title">Best Places To Visit</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <h2 className="featured__hotel-title">Best Hotels To Stay</h2>
          </Col>
          <FeaturedHotelList />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <h2>With our all experience <br /> we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Provident voluptatem</p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>18k+</span>
                <h6>Successful Trips</h6>
              </div>

              <div className="counter__box">
                <span>3k+</span>
                <h6>Regular Customers</h6>
              </div>

              <div className="counter__box">
                <span>14</span>
                <h6>Years of Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="travel__img">
              <img src={travelExperience} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Home;