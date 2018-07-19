import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Header from './components/header';
import SearchBar from './components/search_bar';

const App = () => {
  return (<div>
    <Header />
    <SearchBar />
  </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));