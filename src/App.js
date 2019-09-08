import React, { Component } from "react";
import STORE from "./STORE";
import List from "./List";
// import logo from './logo.svg';
// import './App.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: STORE.lists,
      allCards: STORE.allCards
    };
  }
  deleteCard(cardId) {
    console.log(`delete clicked`, cardId)
    const newAllCards = { ...this.state.allCards };
    delete newAllCards[cardId];
const newLists=[]
this.state.lists.forEach(list=>{
  const result= list.cardIds.filter(cards=> cards!== cardId)
  newLists.push({...list, cardIds:result})

})
console.log(`newCards`, newAllCards)
console.log(`newLista`, newLists)
    this.setState({ 
      lists: newLists,
      allCards: newAllCards });
  }
  render() {
    const { lists, allCards } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Shopping List</h1>
        </header>
        <div className="App-List">
          {lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => ({ ...allCards[id], id }))}
              lists={list}
              deleteCard={(id)=>this.deleteCard(id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

// export default App;
