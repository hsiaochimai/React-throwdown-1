import React, {Component} from 'react';
import STORE from './STORE'
import List from './List'
// import logo from './logo.svg';
// import './App.css';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      lists:STORE.lists, 
      allCards:STORE.allCards
    }
   
  }
  render(){
    const {lists, allCards}= this.state
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping List</h1>
      </header>
      <div className='App-List'>
        {lists.map((list)=> 
          <List 
          key={list.id}
       header={list.header}
       cards={list.cardIds.map(id=>allCards[id])}
          lists={list}/>)}
        </div>
    </div>
  );
}
}

// export default App;
