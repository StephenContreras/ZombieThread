import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './EpisodePage.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class EpisodePage extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      season: props.match.params.season,
      episode: props.match.params.episode,
      title: null,
      notes: null, 
      picture: null,
      link: null
    }
  }

  componentDidMount(){

    const imgUrl = 'https://images.unsplash.com/photo-1591117752671-541f3495dc93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

    var xhr = new XMLHttpRequest();
      xhr.open('GET', 
        'https://raw.githubusercontent.com/StephenContreras/ZombieThreadContent/trunk/' + this.state.season + '/' + this.state.episode + '.json', 
        true);
      xhr.responseType = 'json';
      xhr.onload = function() {
                var status = xhr.status;
                if (status === 200) {
                  console.log(xhr.response);
                  this.setState({
                    title: xhr?.response?.title, 
                    notes: xhr?.response?.notes,
                    picture: xhr?.response?.picture,
                    link: xhr?.response?.link
                  });
                } else {
                  console.log(status);
                  this.setState({
                    title: '404 - Cant find that episode', 
                    notes: 'Season ' + this.state.season + ' Episode ' + this.state.episode + ' has been redacted (or never existed) ' ,
                    picture: imgUrl,
                    link: null
                  });
                }
              }.bind(this);
      xhr.send();
  }

  render(){
    if(this.state.title === null)
      return null;

    return(
      <Container fluid>
        <Row>
          <Col xs={12} md={{span: 8, offset: 2}}>
            <Jumbotron className='episode-jumbo'>
              <div className='imgContainer'>
                <img src={this.state.picture} alt={'episode icon for ' + this.state.title + ' '}/>
              </div>
              <h2>{this.state.title}</h2>
              {this.state.notes}
              {this.state.link != null &&
                <br></br> &&
                <a href={this.state.link}>Listen on spotify</a>
              }
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default EpisodePage;
