import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Jaiden Miller
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonGroup variant="contained" aria-label="outlined button group" color="secondary" size="large">
       <Button
       href="https://www.google.com/"
       target="_blank"
       rel="noopener noreferrer"
       >Google</Button>
       <Button
       href="https://www.youtube.com/watch?v=1at8XzyeEVA"
       target="_blank"
       rel="noopener noreferrer"
       >Youtube Video</Button>
      </ButtonGroup>
        <Button variant="contained"
        size="small"
        color="success"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer"
        >Don't click This</Button>
      </header>
    </div>
  );
}

export default App;
