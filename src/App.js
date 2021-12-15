import React from 'react';
import Title from './components/Title';
import Count from './components/Count';
import Filter from './components/Filter';
import Quote from './components/Quote';
import QuoteDelete from './components/QuoteDelete';
import QuoteFetch from './components/QuoteFetch';
import QuoteList from './components/QuoteList';

function App() {
  return (
    <div id="wrapper">
      <Title />
      <Count />
      <Filter />
      <Quote />
      <QuoteDelete />
      <QuoteFetch />
      <QuoteList />
    </div>
  );
}

export default App;
