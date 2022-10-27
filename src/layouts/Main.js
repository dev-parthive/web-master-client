import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import RightSideNav from '../components/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
        <Header></Header>
         <Container>
        <Row>
            <Col lg="3" className='d-none d-lg-block'>
            <RightSideNav></RightSideNav>
            </Col>
            <Col lg="9">
            <Outlet></Outlet>
            </Col>
            
        </Row>
       </Container>
       <Footer></Footer>
      </div>
    );
};

export default Main;