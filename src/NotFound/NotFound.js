import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './NotFound.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class NotFound extends React.Component {
  render(){
    return(
      <Container fluid>
        <Row>
          <Col xs={12} md={{span: 8, offset: 2}}>
            <Jumbotron className='episode-jumbo'>
              <h2>404</h2>
              <p>We don't know what you're looking for but it ain't here.</p>
              <p>Try going <a href='/'>home</a>.</p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;
