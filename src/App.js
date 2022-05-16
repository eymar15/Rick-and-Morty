import {useEffect, useState,} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import './App.css';
import Pagination from './components/Pagination';
import CharacterDescription from './components/CharacterDescription';
import {BrowserRouter , Route, Router} from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState ([]);
  const [info, setInfo] = useState ({});

  const initialUrl = "https://rickandmortyapi.com/api/character";
  
  const fetchCharacters = (url) => {
    fetch(url)
    .then((Response) => Response.json ())
    .then ((data) => {setCharacters (data.results);
      setInfo(data.info);
    })
    .catch ((error) => console.log (error));
  };

  const onPrevious = () => {
    fetchCharacters (info.prev);

  }

  const onNext = () => {
    fetchCharacters (info.next);

  }

  useEffect (() => {
    fetchCharacters (initialUrl);
  }, []);

  return ( 
 
    <> 
    
    <Navbar brand="Rick and Morty Api" /> 

    
    <div className="container mt-5">
      <Characters characters= {characters} /> 
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious}  onNext={onNext} />
    </div>
   
    <BrowserRouter>
    <div className='App'>
       <Router>
           <Route exact path="/CharacterDescription" 
           element={<CharacterDescription />} />
        </Router>
        </div>
      
    </BrowserRouter>

    </>

  );
}

   
export default App;
