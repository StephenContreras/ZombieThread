import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Graves.scss';


class Graves extends React.Component {
    render(){
        return (
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                    <Button variant="grave">Dark</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Graves;