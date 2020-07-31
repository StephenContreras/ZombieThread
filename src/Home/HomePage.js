import React from 'react';
import '../App.scss';
import Header from './Header'
import DescNPlayer from './DescNPlayer'


class HomePage extends React.Component {
  render(){
    return (
      <div className="Home">
        <DescNPlayer/>
      </div>
    );
  }
}

export default HomePage;
