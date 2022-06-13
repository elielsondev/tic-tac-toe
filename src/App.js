import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <h1 className='title'>
        JOGO DA VELHA
      </h1> 
      <div className='board'>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
        <div className='cell'>.</div>
      </div>
    </main>
  )
}

export default App;