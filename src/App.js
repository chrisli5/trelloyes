import React from 'react';
import List from './components/List';
import './App.css';

function getCards(ids, allCards) {
  return ids.map(id => {
    return allCards[id];
  });
}

function App(props) {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.store.lists.map(list =>
          <List key={list.id} header={list.header} cards={getCards(list.cardIds, props.store.allCards)} />
        )}
      </div>
    </main>
  );
}

export default App;