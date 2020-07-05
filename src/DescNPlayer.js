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
                        Zombie Thread is a podcast centered on technology. Each episode will dive into a different facet of technology to explore the lesser known histories and impacts that it has on society. From ADC to Zero days, come with us to learn why things are the way they are and what that means for us. 
                        </p>
                    </Col>
                    <Col xs={12} md={8}>
                    <iframe title="embeded player" sandbox="allow-same-origin allow-scripts allow-top-navigation allow-popups allow-forms" scrolling="no" width="100%" height="185" frameborder="0" src="https://embed.radiopublic.com/e?if=zombie-thread-WoqP3y"></iframe>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DescNPlayer;