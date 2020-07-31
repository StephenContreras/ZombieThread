import './Header.scss';

import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from '../assets/circle_hand_blue.png'


class Header extends React.Component {
    render(){
        return (
            <div className = 'outer'>
                <Container className='headerDiv'>
                    <Row>
                        <Col sm={12} md={{span: 6, offset: 3}}>
                            <a href='/' className='headerLink'>
                                <img className='logo' src={Logo} alt="Zombie Thread Logo"></img><h1>Zombie Thread</h1>
                            </a>
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Header;