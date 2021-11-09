
import React, {useState} from 'react';
import Search from './components/search';
import List from './components/list'

function App() {
  const [inputText, setInputText] = useState('');
const [todos, setTodos] = useState([])


  return (
    <div className="App">
      <header><h1>toBuy</h1></header>
     <Search inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
     <p>{inputText}</p>
     <List todos={todos}/>
     </div>
  );
}

export default App;
