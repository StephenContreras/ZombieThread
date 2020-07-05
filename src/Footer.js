import './Footer.scss';

import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Footer extends React.Component {
    render(){
        return (
            <Container id="footer">
                <Row>
                    <Col sm={12} md={{span: 6, offset: 3}}>
                        <a href="https://stephencontreras.com" >&copy; 2020 Stephen Contreras</a>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Footer;