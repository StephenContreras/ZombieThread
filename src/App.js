import React from 'react';
import './App.scss';
import Header from './Header'
import DescNPlayer from './DescNPlayer'


function App() {

  const CORS_PROXY = '';//"https://cors-anywhere.herokuapp.com/"
 
  let Parser = require('rss-parser');
  let parser = new Parser();
  (async () => {
  
    let feed = await parser.parseURL(CORS_PROXY + 'https://anchor.fm/s/29d516f4/podcast/rss');
    console.log(feed.title);
  
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
  
  })();

  return (
    <div className="App">
      <Header/>
      <DescNPlayer/>
    </div>
  );
}

export default App;
