import React, {useRef, useEffect, useContext} from 'react';
import {Container, Row, Button} from 'reactstrap';
import {NavLink, Link, useNavigate} from 'react-router-dom';
import SiteMainLogo from '../assets/images/SiteMainLogo.png';
import '../styles/Header.css';
import {AuthContext} from '../context/AuthContext.js';

const nav_links = [
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
]

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const {user, dispatch} = useContext(AuthContext);

  const logout = ()=>{
    dispatch({type:'LOGOUT'});
    navigate('/');
  }

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
              
            <div className="logo">
              <img src={SiteMainLogo} alt="" />
            </div>

            {/* ----menu---- */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {
                  nav_links.map((item,index)=>(
                    <li className="nav__item" key={index}>
                      <NavLink className={navClass => navClass.isActive ? "active__link" : ""} to={item.path}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* ----Register/Login menu---- */}
            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">

                {
                  user? (
                  <>
                    <h5 className='username mb-0'>{user.username}</h5>
                    <Button className='btn btn-light' onClick={logout}>Logout</Button>
                  </>) : 
                  (<>
                    <Button className='btn secondary__btn'>
                      <NavLink className={navClass => navClass.isActive ? "active__link" : ""} to='/login'>Login</NavLink>
                    </Button>
                    <Button  className='btn primary__btn'>
                      <NavLink className={navClass => navClass.isActive ? "active__link" : ""} to='/register'>Register</NavLink>
                    </Button>
                  </>)
                }

              </div>
            </div>

            <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
            </span>

          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header