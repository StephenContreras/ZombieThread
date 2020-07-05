import './Header.scss';

import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Logo from './assets/circle_hand_blue.png'


class Header extends React.Component {
    render(){
        return (
            <Jumbotron fluid className = "outer">
                <Container>
                    <Row>
                        <Col sm={12} md={{span: 6, offset: 3}}>
                            <img src={Logo} alt="Zombie Thread Logo"></img><h1>Zombie Thread</h1>
                            
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Header;