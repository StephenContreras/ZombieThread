import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './DescNPlayer.css';


class DescNPlayer extends React.Component {
    
    render(){
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <p>
                        Zombie Thread is a podcast centered on technology. Each episode will dive into a different facet of technology to explore the lesser known histories and impacts that it has on society. From ADC to Zero days come with us to learn why things are the way they are and what that means for us. 
                        </p>
                    </Col>
                    <Col xs={12} md={8}>
                    <iframe title="CastBox Player" src="https://castbox.fm/app/castbox/player/id3074702?v=8.22.11&autoplay=0" frameBorder="0" width="100%" height="500"></iframe>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DescNPlayer;