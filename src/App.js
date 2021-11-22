import React, { useState, useEffect } from 'react';
import Header from './components/ui/header.js';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import axios from 'axios';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState(''); //passing query as prop from search to app.js, then setting it

  //takes arrow function - use async await
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      //console.log(result.data);
      setItems(result.data); //adjusts state so it has all that data
      setIsLoading(false); //once characters are loaded, no need to load anymore
    }
    fetchItems()
  }, [query]) //setting query as dependency - whenever query changes, useEffect function activates

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;

