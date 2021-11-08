
import React, {useState} from 'react';
import Search from './components/search';
import List from './components/list'

function App() {
  const [inputText, setInputText] = useState('');
  return (
    <div className="App">
      <header><h1>toBuy</h1></header>
     <Search setInputText={setInputText}/>
     <p>{inputText}</p>
     <List/>
     </div>
  );
}

export default App;
