import React from 'react';
import '../styles/Footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import SiteMainLogo from '../assets/images/SiteMainLogo.png';

const quick__links = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/tours',
    display:'Tours'
  },
  {
    path:'/hotels',
    display:'Hotels'
  }
];

const quick__links2 = [
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className='logo'>
            <img src={SiteMainLogo} alt="" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, nobis.</p>

            <div className="social__links d-flex align-items-center gap-4">
              <span className='align-items-center d-flex gap-4'>
                <Link to='#'><i class="ri-youtube-fill"></i></Link>
                <Link to='#'><i class="ri-github-fill"></i></Link>
                <Link to='#'><i class="ri-facebook-circle-fill"></i></Link>
                <Link to='#'><i class="ri-instagram-fill"></i></Link>
              </span>
            </div>
            </div>
          </Col>
          <Col lg='3'>
            <h5 className="footer__link-title">Discover</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links.map((item, index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'> 
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
          <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup className='footer__quick-links'>
              {
                quick__links2.map((item, index)=>(
                  <ListGroupItem key={index} className='ps-0 border-0'> 
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>

          <Col lg='3'>
          <h5 className="footer__link-title">Contact</h5>
            <ListGroup className='footer__quick-links'>
                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'> 
                    <h6 className='mb-0 d-flex align-items-center gap-2'> 
                      <span><i class="ri-map-pin-fill"></i></span>
                      Address:
                    </h6>
                    <p className="mb-0">Delhi, India.</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'> 
                    <h6 className='mb-0 d-flex align-items-center gap-2'> 
                      <span><i class="ri-mail-fill"></i></span>
                      Email:
                    </h6>
                    <p className="mb-0">travelbooking@gmail.com</p>
                  </ListGroupItem>

                  <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'> 
                    <h6 className='mb-0 d-flex align-items-center gap-2'> 
                      <span><i class="ri-phone-fill"></i></span>
                      Phone:
                    </h6>
                    <p className="mb-0">+91 9601610XXXX</p>
                  </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer